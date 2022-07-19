import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject, takeUntil, timer } from 'rxjs';


@Directive({
  selector: '[appAnimatedCounter]'
})
export class AnimatedCounterDirective implements OnInit, OnDestroy {
  @Input('appAnimatedCounter') value: number = 0;
  @Input() delay = 0;
  @Input() speed = 0;

  staticText: string = '';

  private destroyed$ = new Subject<void>();
  private startingValue = 0;
  private startingValueDecimal = 0;

  constructor(private el: ElementRef<HTMLElement>,
              private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    timer(this.delay || 0)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        complete: () => this.animate()
      });
  }

  ngOnDestroy(): void {

  }

  private animate(): void {
    if (this.value && this.safeValidate(this.value)) {
      const start = () => {
        if (this.startingValue < this.value) {
          this.startingValue++;
          this.renderer.setProperty(this.el.nativeElement, 'textContent', this.startingValue);
          setTimeout(start, this.speed);
        }
      }

      start();
    }
  }

  private safeValidate(value: any): boolean {
    return typeof value === 'number';
  }
}
