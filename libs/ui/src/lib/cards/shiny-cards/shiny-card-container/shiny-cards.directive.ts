import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[shinyCards]',
  standalone: true,
})
export class ShinyCardsDirective implements OnInit {
  private cards: NodeListOf<HTMLDivElement> | undefined;

  constructor(private readonly el: ElementRef) {}

  ngOnInit(): void {
    this.cards = this.el.nativeElement.querySelectorAll('.shiny-card');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const { clientX, clientY } = event;
    console.log({ clientX, clientY });
  }
}
