import { NgModule } from '@angular/core';
import {DelayDirective} from './delay.directive';

@NgModule({
  declarations: [DelayDirective],
  exports: [DelayDirective]
})

export class DelayModule { }
