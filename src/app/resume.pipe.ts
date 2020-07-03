import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {
 public maLimit : number;
  transform(value: string, limit?: number): any {
   if (!value) {
     return null;
   }
   this.maLimit = (limit) ? limit : 30;
   return value.substr(0, this.maLimit).split(" ") + '...';
  }

}
