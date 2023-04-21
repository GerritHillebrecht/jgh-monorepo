import { Component, Input } from '@angular/core';

export interface BlogPost {
  title: string;
  body: string;
  image: string;
  date: Date;
  topic: string;
  author: string;
}

@Component({
  selector: 'jgh-lib-blog-preview-card',
  templateUrl: './blog-preview-card.component.html',
  styleUrls: ['./blog-preview-card.component.scss'],
})
export class BlogPreviewCardComponent {
  @Input() blogPost: BlogPost = {
    title: 'Blog Post 1',
    body: 'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
    image: 'https://picsum.photos/200/300',
    date: new Date(),
    topic: 'Topic 1',
    author: 'Author 1',
  };
}
