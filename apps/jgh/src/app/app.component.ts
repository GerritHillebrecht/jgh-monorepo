import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NotificationService } from './shared/service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'jgh-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'jgh';
  constructor(
    private readonly notificationService: NotificationService,
    private readonly snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.notificationService.notification$.subscribe(
      ({ message, type, actionLabel }) => {
        this.snackbar.open(message, actionLabel, {
          duration: 3000,
          panelClass: `notification-${type}`,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
    );
  }
}
