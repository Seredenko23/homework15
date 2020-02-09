import { NgModule } from '@angular/core';
import { FibonacciDirective } from './fibonacci.directive';

@NgModule({
  declarations: [FibonacciDirective],
  exports: [FibonacciDirective]
})

export class FibonacciModule { }
