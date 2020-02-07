import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TestComponent } from './test.component';
import { FactorialModule } from '../pipes/factorial/factorial.module';
import { HackerCaseModule } from '../pipes/hackerCase/hackerCase.module';
import { NobleModule } from '../pipes/noble/noble.module';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    BrowserModule,
    FactorialModule,
    HackerCaseModule,
    NobleModule
  ],
  providers: [],
  exports: [
    TestComponent
  ],
  bootstrap: []
})
export class TestModule { }
