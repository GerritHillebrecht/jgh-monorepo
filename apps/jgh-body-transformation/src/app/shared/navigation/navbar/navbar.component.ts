import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ToolbarComponent, UserDropdownComponent } from '@jgh-lib/ui';
import { MatButtonModule } from '@angular/material/button';
import { ScrollService } from '../../../core/service/scroll.service';
import { RouterModule } from '@angular/router';

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
    NgOptimizedImage,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private readonly scrollService = inject(ScrollService);
  protected readonly scrollDistance$ = this.scrollService.scrollDistance$;

  protected links: Navlink[] = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Courses',
      path: 'courses',
    },
    {
      label: 'Schedule',
      path: 'schedule',
    },
    {
      label: 'The Gym',
      path: 'gym',
    },
    {
      label: 'Blog',
      path: 'blog',
    },
    {
      label: 'Pricing',
      path: 'plans',
    },
  ];
}
