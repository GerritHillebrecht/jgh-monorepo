import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from '../../social/socials/socials.component';

@Component({
  selector: 'jgh-bt-footer',
  standalone: true,
  imports: [CommonModule, SocialsComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  date = new Date();
}
