import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class Custompipe implements PipeTransform {

  // here we get the value form the input and return the value in the desired format
  transform(value: any, ...args: any[]): any {
    // debugger;
    return "welcom " + value ;
  }

}
