import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageNumber'
})
export class PageNumberPipe implements PipeTransform {

  transform(data: any[], start: any): any {
    let result = {"data":[],"page":[]};
    let pageNumber = data.length / 6 ;
    let startNo = (start * 6) - 6;
    let finishNo = (start * 6);
    // console.log(Math.ceil(pageNumber));
    for(let j = 1; j <= Math.ceil(pageNumber); j++){
      result.page.push(j);
    }
    for(let i = startNo; i < finishNo; i++){
        if(!data[i]){
            break;
        }
        result.data.push(data[i]);
    }
    return result.data;
  }
}
