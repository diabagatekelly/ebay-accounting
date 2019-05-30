import { Pipe, PipeTransform } from '@angular/core';
import { Ebay } from '../ebay.model';

@Pipe({
  name: 'sort'
})
export class ArraySortPipe  implements PipeTransform {
    sortArrayOfObjects = (arr, key) => {
        return arr.sort((a, b) => {
            return a[key] - b[key];
        });
    }

  transform(input: Ebay[]) {
      const output = [];
      for (let i = 0; i <= input.length - 1; i++) {
            this.sortArrayOfObjects(input, 'Title');
            this.sortArrayOfObjects(input, 'VariationTitle');

      }
      output.push(input);
      return output;
  }
}
