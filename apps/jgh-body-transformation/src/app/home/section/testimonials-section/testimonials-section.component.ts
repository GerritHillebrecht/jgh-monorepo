import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialComponent, BTTestimonial } from '@jgh-lib/ui';

@Component({
  selector: 'jgh-bt-testimonials-section',
  standalone: true,
  imports: [CommonModule, TestimonialComponent],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss'],
})
export class TestimonialsSectionComponent {
  protected readonly testimonials: BTTestimonial[] = [
    {
      name: 'Mike Tyson',
      quote:
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      position: 'Heavyweight Champion',
      image:
        'https://www.sportsillustrated.de/sites/default/files/2023-01/Mike%20Tyson.jpg',
    },
  ];
}
