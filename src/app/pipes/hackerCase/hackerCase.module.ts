import { NgModule } from '@angular/core';
import {HackerCasePipe} from './hackerCase.pipe';

@NgModule({
  declarations: [HackerCasePipe],
  exports: [HackerCasePipe]
})

export class HackerCaseModule { }
