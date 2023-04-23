import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveDirective } from '@jgh-lib/utility/observe';

@Component({
  selector: 'jgh-bt-section-details',
  standalone: true,
  imports: [CommonModule, ObserveDirective],
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.scss'],
})
export class SectionDetailsComponent {
  detailsCards: {
    image: string;
    title: string;
    subtitle: string;
  }[] = [
    {
      subtitle: `Equipment`,
      title: 'Huge selection of new and high-quality equipment',
      image:
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      subtitle: 'Areas',
      title:
        'Six different areas for your training, including a pool and spa area',
      image:
        'https://images.unsplash.com/photo-1623718649591-311775a30c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      // 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      subtitle: 'Trainings',
      title:
        'Each Gymbro has his speciality and will help you reach a new level',
      image:
        'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80',
    },
  ];
}
