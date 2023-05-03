import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import {
  Firestore,
  Timestamp,
  collection,
  collectionData,
  query,
  deleteDoc,
  addDoc,
  orderBy,
  doc,
  where,
  CollectionReference,
} from '@angular/fire/firestore';
import { MatCalendar } from '@angular/material/datepicker';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

interface Shift {
  id?: string;
  date: Timestamp;
  nightShift: boolean;
  jumpInShift: boolean;
  holiday: boolean;
}

interface LocalShift extends Omit<Shift, 'date'> {
  date: Date;
}

@Component({
  selector: 'st-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent {
  @ViewChild('calendar') calendar!: MatCalendar<any>;

  protected selected: Date | null | undefined;
  protected dates: LocalShift[] = [];

  private readonly currentDate = new Date();
  private readonly initialStartDate = new Date(
    this.currentDate.getFullYear(),
    this.currentDate.getMonth(),
    1
  );
  private readonly initialEndDate = new Date(
    this.currentDate.getFullYear(),
    this.currentDate.getMonth() + 1,
    0
  );
  private readonly currentMonth$ = new BehaviorSubject<{
    startDate: Date;
    endDate: Date;
  }>({ startDate: this.initialStartDate, endDate: this.initialEndDate });

  private readonly Firestore = inject(Firestore);
  private readonly shiftsRef = collection(
    this.Firestore,
    'shifts'
  ) as CollectionReference<Shift>;

  protected readonly shifts$ = this.currentMonth$.pipe(
    switchMap(({ startDate, endDate }) => {
      const shiftsQuery = query(
        this.shiftsRef,
        orderBy('date'),
        where('date', '>=', startDate),
        where('date', '<=', endDate)
      );
      const shiftsCollection = collectionData<Shift>(shiftsQuery, {
        idField: 'id',
      });

      return shiftsCollection.pipe(
        map((shifts) =>
          shifts.map((shift: Shift) => ({
            ...shift,
            date: shift.date.toDate(),
          }))
        ),
        tap((shifts) => (this.dates = shifts))
      );
    })
  );

  monthSelected(date: Date): void {
    console.log('monthSelected', date);
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.currentMonth$.next({ startDate, endDate });
  }

  addDate(date: Date) {
    const exists = this.dates.some((s) => s.date.getTime() === date.getTime());

    if (!exists) {
      addDoc<Shift>(this.shiftsRef, {
        date: Timestamp.fromDate(date),
        nightShift: false,
        jumpInShift: false,
        holiday: false,
      });
    }
  }

  remove(shift: LocalShift): void {
    deleteDoc(doc(this.shiftsRef, shift.id));
  }
}
