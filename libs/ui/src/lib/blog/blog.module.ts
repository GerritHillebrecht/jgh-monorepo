import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPreviewCardComponent } from './blog-preview-card/blog-preview-card.component';
import { TruncatePipe } from '@jgh-lib/utility/truncate';

@NgModule({
  declarations: [BlogPreviewCardComponent],
  imports: [CommonModule, TruncatePipe],
  exports: [BlogPreviewCardComponent],
})
export class BlogModule {}
