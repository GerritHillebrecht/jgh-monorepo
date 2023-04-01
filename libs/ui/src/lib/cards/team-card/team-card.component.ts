import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faXing,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export interface Trainer {
  name: string;
  title: string;
  image: string;
  socials: {
    icon: any;
    label: string;
  }[];
}

@Component({
  selector: 'jgh-lib-team-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
})
export class TeamCardComponent {
  @Input() radialBackground = false;

  @Input() cardContent: Trainer = {
    name: 'Mark Foster',
    title: 'Personal Trainer',
    image: 'assets/images/models/model-male-1.png',
    socials: [
      {
        icon: faFacebook,
        label: 'Facebook',
      },
      {
        icon: faInstagram,
        label: 'Instagram',
      },
      {
        icon: faTwitter,
        label: 'Twitter',
      },
    ],
  };
}
