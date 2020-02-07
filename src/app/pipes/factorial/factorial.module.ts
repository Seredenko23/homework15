import { NgModule } from '@angular/core';
import {FactorialPipe} from './factorial.pipe';

@NgModule({
  declarations: [FactorialPipe],
  exports: [FactorialPipe]
})

export class FactorialModule { }
