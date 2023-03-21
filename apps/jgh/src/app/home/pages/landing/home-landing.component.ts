import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { interval, tap } from 'rxjs';
import { ContentSliderComponent } from '../../../shared/component/slider/content-slider';

@Component({
  selector: 'jgh-monorepo-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss'],
})
export class HomeLandingComponent implements OnInit, AfterViewInit {
  @ViewChild('slider')
  slider: ContentSliderComponent | undefined;

  private readonly observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) =>
        entry.isIntersecting
          ? entry.target.classList.add('show')
          : entry.target.classList.remove('show')
      );
    },
    { threshold: 1 }
  );

  ngOnInit(): void {
    console.log('Home Initialized');
    // this.observer.observe(document.querySelector('.observe') as Element);
  }

  ngAfterViewInit(): void {
    console.log('Home View Initialized');
  }
}
