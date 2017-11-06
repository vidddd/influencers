import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args: any[] = null): any {
  //   console.log(value);
  //  return Object.keys(value)//.map(key => value[key]);
      let keys = [];
      for (let key in value) {
           keys.push({value: value[key]});
      }
      //console.log(keys);
       return keys;
  }

}
