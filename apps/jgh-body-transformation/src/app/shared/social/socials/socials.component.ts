import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faSnapchat,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'jgh-bt-socials',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
  protected socials = [
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
    {
      icon: faYoutube,
      label: 'Youtube',
    },
    {
      icon: faSnapchat,
      label: 'Snapchat',
    },
  ];
}
