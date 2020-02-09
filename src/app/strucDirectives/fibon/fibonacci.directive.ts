import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appFibonacci]'
})
export class FibonacciDirective {
  constructor( private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  fibonacci(n) {
    return n <= 1 ? n : this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  @Input() set appFibonacci(n: number) {
    const amount: number = n;
    // tslint:disable-next-line:prefer-const
    let array: number[] = [];
    for (let i = 0; i < amount; i++) {
      array.push(this.fibonacci(i));
    }
    console.log(array.join(' '));
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.templateRef.elementRef.nativeElement.nextSibling.textContent = array.join(' ');
  }
}
