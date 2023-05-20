import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore } from '@angular/fire/firestore';
import { LogoComponent } from '../../shared/component/logo/logo.component';
import { NavbarComponent } from '../../shared/component/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowUpRightFromSquare,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import {
  StepIndicatorComponent,
  StepSideContentContainerComponent,
} from '@jgh-lib/ui/design-blocks/steps';
import { ShinyCardComponent, ShinyCardsComponent } from '@jgh-lib/ui/cards';
import {
  BreakpointObserver,
  LayoutModule,
  Breakpoints,
} from '@angular/cdk/layout';
import { SliderComponent } from '../components/slider/slider.component';
import { map } from 'rxjs';

@Component({
  selector: 'jgh-monorepo-home-layout',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    NavbarComponent,
    FontAwesomeModule,
    RouterModule,
    ShinyCardComponent,
    ShinyCardsComponent,
    StepIndicatorComponent,
    StepSideContentContainerComponent,
    SliderComponent,
    LayoutModule,
  ],
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export default class HomeLayoutComponent implements OnInit {
  private readonly firestore = inject(Firestore);
  protected readonly iconOpen = faArrowUpRightFromSquare;
  protected readonly iconArrowRight = faArrowRight;

  protected small$ = inject(BreakpointObserver)
    .observe([Breakpoints.HandsetPortrait])
    .pipe(map((result) => result.matches));

  constructor(private readonly observer: BreakpointObserver) {}

  private readonly rotationRightObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(
        (entry) => {
          entry.target.classList.toggle(
            'fadeInRotateRight',
            entry.isIntersecting
          );
        },
        { threshold: 1.0 }
      );
    }
  );

  private readonly rotationLeftObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(
        (entry) => {
          entry.target.classList.toggle(
            'fadeInRotateLeft',
            entry.isIntersecting
          );
        },
        { threshold: 1.0 }
      );
    }
  );

  ngOnInit(): void {
    const elements = document.querySelectorAll('span');
    elements.forEach((element) => {
      this.rotationRightObserver.observe(element);
    });

    const elementsLeft = document.querySelectorAll('picture');
    elementsLeft.forEach((element) => {
      this.rotationLeftObserver.observe(element);
    });
  }
}
