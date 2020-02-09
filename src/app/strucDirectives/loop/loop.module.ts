import { NgModule } from '@angular/core';
import {LoopDirective} from './loop.directive';

@NgModule({
  declarations: [LoopDirective],
  exports: [LoopDirective]
})

export class LoopModule { }
