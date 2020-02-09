import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TestComponent } from './test.component';
import { FactorialModule } from '../pipes/factorial/factorial.module';
import { HackerCaseModule } from '../pipes/hackerCase/hackerCase.module';
import { NobleModule } from '../pipes/noble/noble.module';
import {DropdownModule} from '../attrDirectives/dropdown/dropdown.module';
import {WaveModule} from '../attrDirectives/wave/wave.module';
import {DyslexiaModule} from '../attrDirectives/dyslexia/dyslexia.module';
import {DelayModule} from '../strucDirectives/delay/delay.module';
import {FibonacciModule} from '../strucDirectives/fibon/fibonacci.module';
import {LoopDirective} from '../strucDirectives/loop/loop.directive';
import {LoopModule} from '../strucDirectives/loop/loop.module';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    BrowserModule,
    FactorialModule,
    HackerCaseModule,
    NobleModule,
    DropdownModule,
    WaveModule,
    DyslexiaModule,
    DelayModule,
    FibonacciModule,
    LoopModule
  ],
  providers: [],
  exports: [
    TestComponent
  ],
  bootstrap: []
})
export class TestModule { }
