import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
     let arrFiltered:number[]=[];
    args.filter(e=>{

      if(e===value){
        arrFiltered.push(e);
      }
    });

    return arrFiltered;
  }

}
