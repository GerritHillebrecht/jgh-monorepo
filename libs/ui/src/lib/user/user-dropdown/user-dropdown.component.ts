import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { AvatarComponent } from '../../avatar/avatar/avatar.component';
import { User } from '@angular/fire/auth';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'jgh-lib-user-dropdown',
  standalone: true,
  imports: [CommonModule, MatMenuModule, AvatarComponent, MatIconModule],
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss'],
})
export class UserDropdownComponent {
  @Input() user: User | undefined;
  ngOnInit(): void {
    console.log(this.user?.displayName);
  }
}
