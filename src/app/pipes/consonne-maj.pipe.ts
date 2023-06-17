import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'consonneMaj'
})
export class ConsonneMajPipe implements PipeTransform {

  transform(ch:string): any {
    let voyels = ["a", "e", "i", "u", "o", "y"];
    let result = "";
    let x = "";
  for (let i = 0; i < ch.length; i++) {

for (let j = 0; j < voyels.length; j++) {
if (ch[i]!==voyels[j]) {
    x= ch[i].toUpperCase();
    break;
}  
}    
  result=result+x
    }
  return result;
  }

}
