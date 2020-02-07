import { NgModule } from '@angular/core';
import {WaveDirective} from './wave.directive';

@NgModule({
  declarations: [WaveDirective],
  exports: [WaveDirective]
})

export class WaveModule { }
