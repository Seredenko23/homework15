import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hackerCase'
})

export class HackerCasePipe implements PipeTransform {
  transform(value: string): string {
    const arr = Array.from(value);

    return arr.map((symb, ind) => {
      return ind % 2 ? symb.toUpperCase() : symb.toLowerCase();
    }).join('');
  }
}
