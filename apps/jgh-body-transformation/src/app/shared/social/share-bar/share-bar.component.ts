import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faXing,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'jgh-bt-share-bar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatTooltipModule],
  templateUrl: './share-bar.component.html',
  styleUrls: ['./share-bar.component.scss'],
})
export class ShareBarComponent {
  socialLinks = [
    { label: 'Facebook', icon: faFacebook },
    { label: 'Twtter', icon: faTwitter },
    { label: 'Instagram', icon: faInstagram },
    { label: 'Linkedin', icon: faLinkedin },
  ];
}
