import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noble'
})

export class NoblePipe implements PipeTransform {
  transform(name: string, gender: string): string {
    return gender === 'male' ? `Mr.${name}` : `Miss.${name}`;
  }
}
