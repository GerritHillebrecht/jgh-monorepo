import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[glowingBackground]',
  standalone: true,
})
export class GlowingBackgroundDirective {
  constructor(private readonly el: ElementRef) {}

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent): void {
    this.el.nativeElement.classList.add('glowing');
  }
}
