import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

  constructor() { }

  public arrayUnique(array) {
    let result = array.concat();
    for(let i = 0; i < result.length; ++i) {
        for(let j=i+1; j < result.length; ++j) {
            if(result[i] === result[j])
                result.splice(j--, 1);
        }
    }
    return result;
  }

  public tableFilter(column:any[], data:any[], str:string){
    let result:any = [];
    for(let i = 0; i < column.length; i++){
        if(data.filter(item => item[column[i]].indexOf(str) !== -1).length !== 0){
          result = result.concat(data.filter(item => item[column[i]].indexOf(str) !== -1));
          // break;
        }
    }
    return this.arrayUnique(result);
  }

  public pageNo(start:any, maxRow:number, data:any[]){
    let result = {"data":[],"page":[]};
    let pageNumber = data.length / maxRow ;
    let startNo = (start * maxRow) - maxRow;
    let finishNo = (start * maxRow);
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
    return result;
  }

}
