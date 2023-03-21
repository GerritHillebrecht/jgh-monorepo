import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

interface InfoItem {
  icon: string;
  iconColor?: Color;
  iconBackgroundColor?: string;
  content: string;
}

@Component({
  imports: [CommonModule, MatIconModule],
  standalone: true,
  selector: 'jgh-monorepo-splitted-info-screen',
  templateUrl: './splitted-info-screen.component.html',
  styleUrls: ['./splitted-info-screen.component.scss'],
})
export class SplittedInfoScreenComponent {
  @Input()
  rtl = false;

  @Input()
  tags: string[] = ['The essence of it all'];

  @Input()
  headline = 'Unique features. World-class support.';

  @Input()
  description = `We're here to help you get the most out of your business. Our team of experts is available 24/7 to answer your questions and help you get started.`;

  @Input()
  infoItems: InfoItem[] = [
    {
      icon: 'folder',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, cum?`,
    },
    {
      icon: 'home',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, cum?`,
    },
    {
      icon: 'group',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, cum?`,
    },
  ];

  @Input()
  image = '../../../../assets/images/svg/presentation.svg';
}
