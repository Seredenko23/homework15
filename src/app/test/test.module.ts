import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TestComponent } from './test.component';
import { FactorialModule } from '../pipes/factorial/factorial.module';
import { HackerCaseModule } from '../pipes/hackerCase/hackerCase.module';
import { NobleModule } from '../pipes/noble/noble.module';
import {DropdownModule} from '../attrDirectives/dropdown/dropdown.module';
import {WaveModule} from '../attrDirectives/wave/wave.module';
import {DyslexiaModule} from '../attrDirectives/dyslexia/dyslexia.module';

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
    DyslexiaModule
  ],
  providers: [],
  exports: [
    TestComponent
  ],
  bootstrap: []
})
export class TestModule { }
