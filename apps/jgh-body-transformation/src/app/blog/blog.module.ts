import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogModule as BlogElementModule } from '@jgh-lib/ui/blog/blog.module';
import { BlogLayoutComponent } from './layout/blog-layout.component';
import { BlogHeroCardComponent } from './component/blog-hero-card/blog-hero-card.component';
import { HeadlineBlockComponent } from '@jgh-lib/ui/typographie/headline-block/headline-block.component';
import { FullWidthInfoBarComponent } from '@jgh-lib/ui';
import { ChipComponent } from './component/chip/chip.component';
import { BlogSliderComponent } from '../shared/blog/blog-slider/blog-slider.component';

@NgModule({
  declarations: [BlogLayoutComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    BlogElementModule,
    BlogHeroCardComponent,
    HeadlineBlockComponent,
    FullWidthInfoBarComponent,
    ChipComponent,
    BlogSliderComponent,
  ],
})
export class BlogModule {}
