import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[observe]',
  standalone: true,
})
export class ObserveDirective implements AfterViewInit {
  @Input() threshold = 0.3;
  @Input() oneIteration = true;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  private readonly observerCallback = (entries: IntersectionObserverEntry[]) =>
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);

      if (entry.isIntersecting && this.oneIteration) {
        this.observer.unobserve(entry.target);
      }
    });

  // eslint-disable-next-line @typescript-eslint/member-ordering
  private readonly observer = new IntersectionObserver(this.observerCallback, {
    threshold: this.threshold,
  });

  ngAfterViewInit() {
    this.observer.observe(this.el.nativeElement);
  }
}
