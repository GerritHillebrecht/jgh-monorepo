import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullWidthInfoBarComponent } from '@jgh-lib/ui';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CtaComponent } from '../../../shared/button/cta/cta.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPerson, faWeightScale } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'jgh-bt-section-bmi',
  standalone: true,
  imports: [
    CommonModule,
    FullWidthInfoBarComponent,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    CtaComponent,
  ],
  templateUrl: './section-bmi.component.html',
  styleUrls: ['./section-bmi.component.scss'],
})
export class SectionBmiComponent {
  protected bmi: number | undefined;
  protected readonly weight = faWeightScale;
  protected readonly height = faPerson;

  protected bmiForm = new FormGroup({
    height: new FormControl(1.8, [Validators.required]),
    weight: new FormControl(80, [Validators.required]),
  });

  calculateBMI(): void {
    const height = this.bmiForm.get('height')?.value || 1.8;
    const weight = this.bmiForm.get('weight')?.value || 80;
    const bmi = weight / (height * height);
    this.bmi = Math.round(bmi * 100) / 100;
  }
}
