import { Component, inject, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ScrollService } from './core/service/scroll.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'jgh-bt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jgh-body-transformation';
  private readonly router = inject(Router);

  scrollService = inject(ScrollService);

  ngOnInit(): void {
    fromEvent<Event>(window, 'scroll').subscribe(() =>
      this.scrollService.scrollDistance$.next(window.scrollY)
    );

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
