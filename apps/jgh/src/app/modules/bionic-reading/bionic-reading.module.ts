import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BionicReadingRoutingModule } from './bionic-reading-routing.module';
import { BionicReadingLayoutComponent } from './pages/layout';
import { BrNavigationService } from './service';

@NgModule({
  declarations: [BionicReadingLayoutComponent],
  imports: [CommonModule, BionicReadingRoutingModule],
  providers: [BrNavigationService]
})
export class BionicReadingModule {}
