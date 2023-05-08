import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypingRoutingModule } from './typing-routing.module';
import { KeyboardLayoutComponent } from './layout/keyboard-layout.component';
import { KeyboardComponent } from '../../shared/components/keyboard/keyboard.component';

@NgModule({
  declarations: [KeyboardLayoutComponent],
  imports: [CommonModule, TypingRoutingModule, KeyboardComponent],
})
export class TypingModule {}
