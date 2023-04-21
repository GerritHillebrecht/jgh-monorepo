import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerCardComponent } from '../../../shared/card/trainer-card/trainer-card.component';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Trainer } from '@jgh-lib/ui';
import { HeadlineBlockComponent } from '@jgh-lib/ui/typographie/headline-block/headline-block.component';
import { RotateInDirective } from '../../../shared/directive/rotate-in.directive';
import { ObserveDirective } from '@jgh-lib/utility/observe';

@Component({
  selector: 'jgh-bt-trainer-section',
  standalone: true,
  imports: [
    CommonModule,
    TrainerCardComponent,
    HeadlineBlockComponent,
    RotateInDirective,
    ObserveDirective,
  ],
  templateUrl: './trainer-section.component.html',
  styleUrls: ['./trainer-section.component.scss'],
})
export class TrainerSectionComponent {
  protected trainers: Trainer[] = [
    {
      name: 'Mark Foster',
      title: 'God of cardio',
      image: 'assets/images/models/model-male-3.png',
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
    },
    {
      name: 'Svea Therra',
      title: 'Goddess of Yoga',
      image: 'assets/images/models/model-female-2.png',
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
    },
    {
      name: 'Liam Fletcher',
      title: 'X-Fit Warrior',
      image: 'assets/images/models/model-male-2.png',
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
    },
  ];
}
