import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ToolbarComponent, UserDropdownComponent } from '@jgh-lib/ui';
import { MatButtonModule } from '@angular/material/button';
import { ScrollService } from '../../../core/service/scroll.service';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../../core/service/navigation/navigation.service';

interface Navlink {
  label: string;
  path?: string;
}

@Component({
  selector: 'jgh-bt-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarComponent,
    UserDropdownComponent,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NgOptimizedImage,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private readonly scrollService = inject(ScrollService);
  protected readonly scrollDistance$ = this.scrollService.scrollDistance$;
  protected readonly navOpened$ = inject(NavigationService).navOpened$;
  protected readonly links = inject(NavigationService).links;

  requestMessagePermission(): void {
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
}
