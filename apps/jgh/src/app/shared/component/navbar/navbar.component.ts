import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent, UserDropdownComponent } from '@jgh-lib/ui';

@Component({
  selector: 'jgh-monorepo-navbar',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, UserDropdownComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}
