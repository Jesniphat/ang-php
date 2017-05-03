import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageList'
})
export class PageListPipe implements PipeTransform {

  transform(data: any[], start: any): any {
    let result = [];
    let pageNumber = data.length / 6 ;
    for(let j = 1; j <= Math.ceil(pageNumber); j++){
      result.push(j);
    }
    return result;
  }

}
