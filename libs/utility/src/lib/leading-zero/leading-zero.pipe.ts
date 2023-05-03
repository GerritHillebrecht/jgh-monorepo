import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leadingZero',
  standalone: true,
})
export class LeadingZeroPipe implements PipeTransform {
  transform(value: number, zeroes?: number): unknown {
    return String(value).padStart(zeroes ?? 2, '0');
  }
}
