import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '@jgh-lib/ui/toolbar/toolbar.component';
import { UserDropdownComponent } from '@jgh-lib/ui/user/user-dropdown/user-dropdown.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'jgh-monorepo-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarComponent,
    UserDropdownComponent,
    LogoComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}
