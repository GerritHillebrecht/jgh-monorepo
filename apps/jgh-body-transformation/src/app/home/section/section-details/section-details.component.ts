import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-bt-section-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.scss'],
})
export class SectionDetailsComponent {
  detailsCards: {
    image: string;
  }[] = [
    {
      image:
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80',
    },
  ];
}
