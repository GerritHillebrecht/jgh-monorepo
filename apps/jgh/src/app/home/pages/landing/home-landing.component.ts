import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'jgh-monorepo-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss'],
})
export class HomeLandingComponent implements OnInit, AfterViewInit {
  loaded = false;
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
    // this.initialize3D();
    // this.observer.observe(document.querySelector('.observe') as Element);
  }

  private initialize3D() {
    const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
    const app = new Application(canvas);
    app
      .load('https://prod.spline.design/QHmhDVTOlTMRyZST/scene.splinecode')
      .then((result) => {
        this.loaded = true;
        return result;
      });
  }

  ngAfterViewInit(): void {
    console.log('Home View Initialized');
  }
}
