import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  x = 5;
  name = 'Vlados';
  delay = 3000;
  constructor() { }
}
