import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 100, ellipsis = '...'): string {
    return value.length > limit
      ? [...value.split('').splice(0, limit), ellipsis].join('')
      : value;
  }
}
