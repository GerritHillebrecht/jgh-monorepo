import { Component } from '@angular/core';
import { BlogPost } from '@jgh-lib/ui/blog/blog-preview-card/blog-preview-card.component';

@Component({
  selector: 'jgh-bt-blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrls: ['./blog-layout.component.scss'],
})
export class BlogLayoutComponent {
  protected readonly blogPosts: BlogPost[] = [
    {
      title: 'trainings for 2023',
      body: 'Authoritatively disseminate multimedia based total linkage through market-driven methodol. Continually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
      image:
        'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      date: new Date(),
      topic: 'X-Fit',
      author: 'Simon Gaulbert',
    },
    {
      title: 'New Trainingsarea',
      body: 'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
      image:
        'https://images.unsplash.com/photo-1518310952931-b1de897abd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
      date: new Date(),
      topic: 'X-Fit',
      author: 'Simon Gaulbert',
    },
    {
      title: 'New Trainingsarea',
      body: 'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
      image:
        'https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      date: new Date(),
      topic: 'X-Fit',
      author: 'Simon Gaulbert',
    },
    {
      title: 'New Trainingsarea',
      body: 'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
      image:
        'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
      date: new Date(),
      topic: 'X-Fit',
      author: 'Simon Gaulbert',
    },
    {
      title: 'New Trainingsarea',
      body: 'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
      image:
        'https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1804&q=80',
      date: new Date(),
      topic: 'X-Fit',
      author: 'Simon Gaulbert',
    },
    {
      title: 'New Trainingsarea',
      body: 'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
      image:
        'https://plus.unsplash.com/premium_photo-1674675647726-e4910962e79a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      date: new Date(),
      topic: 'X-Fit',
      author: 'Simon Gaulbert',
    },
  ];
}
