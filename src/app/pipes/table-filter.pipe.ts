import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

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


  transform(data: any[], str: any): any {
    // console.log("data = ", data, " str = ", str);
    if(!str){
      return data;
    }

    let keys = [];
    for(let k in data[0]){
      keys.push(k);
    }
    
    let result:any = [];
    // console.log(keys);
    // console.log(" NULL = ", data[0][keys[0]]);
    for(let i = 0; i < keys.length; i++){
        if(data.filter(item => item[keys[i]].indexOf(str) !== -1).length !== 0){
          result = result.concat(data.filter(item => item[keys[i]].indexOf(str) !== -1));
          // break;
        }
    }
    return this.arrayUnique(result);
  }

}
