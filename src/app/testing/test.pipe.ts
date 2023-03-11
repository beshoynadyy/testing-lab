import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    if(value !== null && !isNaN(value)){
      return value * 5;
    } else {
      return 'not a number';
    }
  }

}
