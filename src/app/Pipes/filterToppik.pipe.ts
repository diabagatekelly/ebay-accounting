import { Pipe, PipeTransform } from '@angular/core';
import { Ebay } from '../ebay.model';

@Pipe({
    name: 'toppik',
    pure: false
})

export class ToppikPipe implements PipeTransform {
    // filterDuplicates = (value, index, self) => {
    //     return self.indexOf(value) === index;
    //   }
    //   this.filteredAuthorsID = this.onlyAuthorsID.filter(this.distinct);


    transform(input: Ebay[]) {
        const output = [];
        for (let i = 0; i <= input.length - 1; i++) {
            if (input[i].Variations === undefined) {
                // tslint:disable-next-line:max-line-length
                if (input[i].SKU !== 'Toppik-dbrown' && input[i].SKU !== 'Toppik-medbrown' && input[i].SKU !== 'Toppik-black' && input[i].SKU !== 'Toppik-lbrown' && input[i].SKU !== 'Toppik-medblonde' && input[i].SKU !== 'Toppik-aub' && input[i].SKU !== 'Toppik-gray' && input[i].SKU !== 'Toppik-white') {
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-dbrown') {
                    input[i].Title = 'Toppik Fibers - Giant - Dark Brown';
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-medbrown') {
                    input[i].Title = 'Toppik Fibers - Giant - Medium Brown';
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-black') {
                    input[i].Title = 'Toppik Fibers - Giant - Black';
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-lbrown') {
                    input[i].Title = 'Toppik Fibers - Giant - Light Brown';
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-medblonde') {
                    input[i].Title = 'Toppik Fibers - Giant - Medium Blonde';
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-aub') {
                    input[i].Title = 'Toppik Fibers - Giant - Auburn';
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-gray') {
                    input[i].Title = 'Toppik Fibers - Giant - Gray';
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-white') {
                    input[i].Title = 'Toppik Fibers - Giant - White';
                    output.push(input[i]);
                }
            } else if (input[i].Variations !== undefined) {
                // tslint:disable-next-line:max-line-length
                if (input[i].SKU !== 'Toppik-dbrown' && input[i].SKU !== 'Toppik-medbrown' && input[i].SKU !== 'Toppik-black' && input[i].SKU !== 'Toppik-lbrown' && input[i].SKU !== 'Toppik-medblonde' && input[i].SKU !== 'Toppik-aub' && input[i].SKU !== 'Toppik-gray' && input[i].SKU !== 'Toppik-white') {
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-dbrown') {
                    input[i].VariationTitle = 'Toppik Fibers - Giant - Dark Brown';
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-medbrown') {
                    input[i].VariationTitle = 'Toppik Fibers - Giant - Medium Brown';
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-black') {
                    input[i].VariationTitle = 'Toppik Fibers - Giant - Black';
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-lbrown') {
                    input[i].VariationTitle = 'Toppik Fibers - Giant - Light Brown';
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-medblonde') {
                    input[i].VariationTitle = 'Toppik Fibers - Giant - Medium Blonde';
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-aub') {
                    input[i].VariationTitle = 'Toppik Fibers - Giant - Auburn';
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-gray') {
                    input[i].VariationTitle = 'Toppik Fibers - Giant - Gray';
                    output.push(input[i]);
                } else if (input[i].SKU === 'Toppik-white') {
                    input[i].VariationTitle = 'Toppik Fibers - Giant - White';
                    output.push(input[i]);
                }
            }
        }
        return output;

    }
}

