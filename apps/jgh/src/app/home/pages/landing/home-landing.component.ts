import { AfterViewInit, Component, OnInit } from '@angular/core';
@Component({
  selector: 'jgh-monorepo-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss'],
})
export class HomeLandingComponent implements OnInit, AfterViewInit {
  currentIndex = 0;

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

  changeCurrentIndex(index: number) {
    this.currentIndex = index;
    const projects = Array.from(document.querySelectorAll('.project'));
    const currentProject = projects[index];
    currentProject.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
