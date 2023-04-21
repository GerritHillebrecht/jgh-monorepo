import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[jghBtRotateIn]',
  standalone: true,
})
export class RotateInDirective implements AfterViewInit {
  @Input() threshold = 0.3;
  @Input() oneIteration = true;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('show', entry.isIntersecting);
          if (entry.isIntersecting && this.oneIteration) {
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: this.threshold,
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
