import { NgModule } from '@angular/core';
import {NoblePipe} from './noble.pipe';

@NgModule({
  declarations: [NoblePipe],
  exports: [NoblePipe]
})

export class NobleModule { }
