import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { fromEvent } from 'rxjs';
import { NavigationService } from '../../../core/service/navigation/navigation.service';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
  IconDefinition,
  faCalendarDays,
  faLayerGroup,
  faLocationDot,
  faNewspaper,
  faTag,
  faVolleyball,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'jgh-bt-mobile-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, FontAwesomeModule],
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss'],
})
export class MobileNavigationComponent implements OnInit {
  protected readonly navOpened$ = inject(NavigationService).navOpened$;
  protected readonly links = inject(NavigationService).links;

  protected readonly icons: IconDefinition[] = [
    faLayerGroup,
    faVolleyball,
    faCalendarDays,
    faLocationDot,
    faNewspaper,
    faTag,
  ];

  ngOnInit(): void {
    fromEvent<KeyboardEvent>(window, 'keydown').subscribe((event) => {
      if (event.key === 'Escape') {
        this.navOpened$.next(false);
      }
    });
  }

  protected requestMessagePermission(): void {
    if (!('Notification' in window)) {
      throw new Error('This browser does not support desktop notification');
    }

    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        const notification = new Notification('Hi there!', {
          body: 'I am a desktop notification',
          icon: 'assets/icons/icon-72x72.png',
        });
      }
    });
  }

  protected closeMobileNavigation() {
    this.navOpened$.next(false);
  }
}
