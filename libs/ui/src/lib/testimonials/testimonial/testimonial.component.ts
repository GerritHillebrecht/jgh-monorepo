import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faQuoteLeftAlt, faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export interface BTTestimonial {
  name: string;
  quote: string;
  position: string;
  image: string;
}

@Component({
  selector: 'jgh-lib-testimonial',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  @Input() testimonial?: BTTestimonial;
  quoteLeft = faQuoteLeftAlt;
  quoteRight = faQuoteRightAlt;
}
