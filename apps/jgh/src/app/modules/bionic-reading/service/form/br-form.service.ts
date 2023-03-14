import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith } from 'rxjs/operators';

export interface BionicReadingSettings {
  fixation: number;
  saccade: number;
  opacity: number;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  containerWidth: number;
}

interface SelectOption {
  value: number;
  label: string;
}

@Injectable({
  providedIn: 'root',
})
export class BrFormService {
  readonly BRSettings: BionicReadingSettings = {
    fixation: 0.35,
    saccade: 0,
    opacity: 0.75,
    fontSize: 16,
    lineHeight: 1.65,
    letterSpacing: 0.2,
    containerWidth: 640,
  };

  readonly fixationOptions: SelectOption[] = [
    { value: 0, label: 'Aus' },
    { value: 0.15, label: 'Sehr leicht' },
    { value: 0.35, label: 'Leicht (Empfohlen)' },
    { value: 0.55, label: 'Medium' },
    { value: 0.75, label: 'Stark' },
  ];

  readonly opacityOptions: SelectOption[] = [
    { value: 1, label: 'Aus' },
    { value: 0.85, label: 'Sehr leicht' },
    { value: 0.75, label: 'Leicht (Empfohlen)' },
    { value: 0.55, label: 'Medium' },
    { value: 0.35, label: 'Stark' },
  ];

  readonly settingsForm = new FormGroup({
    fixation: new FormControl(this.BRSettings.fixation),
    saccade: new FormControl(this.BRSettings.saccade),
    opacity: new FormControl(this.BRSettings.opacity),
    fontSize: new FormControl(this.BRSettings.fontSize),
    lineHeight: new FormControl(this.BRSettings.lineHeight),
    letterSpacing: new FormControl(this.BRSettings.letterSpacing),
    containerWidth: new FormControl(this.BRSettings.containerWidth),
  });

  get settings$() {
    return this.settingsForm.valueChanges.pipe(startWith(this.BRSettings));
  }
}
