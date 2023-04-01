import { Component, inject, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ScrollService } from './core/service/scroll.service';

@Component({
  selector: 'jgh-bt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jgh-body-transformation';

  scrollService = inject(ScrollService);

  ngOnInit(): void {
    fromEvent<Event>(window, 'scroll').subscribe(() =>
      this.scrollService.scrollDistance$.next(window.scrollY)
    );
  }
}
