import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { ContentSliderSlide } from '@jgh-lib/ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'jgh-monorepo-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  protected projects$: Observable<ContentSliderSlide[]>;

  constructor(private readonly firestore: Firestore) {
    const projectsRef = collection(this.firestore, 'projects');
    this.projects$ = collectionData(projectsRef) as Observable<
      ContentSliderSlide[]
    >;
  }  // protected projects$: Observable<ContentSliderSlide[]> = collectionData(this.projectsRef);

  ngOnInit(): void {
    // Subscribe to collection
    this.projects$.subscribe((projects) => {
      console.log('Projects', projects);
    });
  }
}
