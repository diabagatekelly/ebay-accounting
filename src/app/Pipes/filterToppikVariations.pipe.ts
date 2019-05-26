import { Pipe, PipeTransform } from '@angular/core';
import { Ebay } from '../ebay.model';
@Pipe({
    name: 'toppikVar',
    pure: false
})

export class ToppikVariationsPipe implements PipeTransform {
    transform(input: Ebay[]) {
        const output = [];
//         for (let i = 0; i <= input.length - 1; i++) {
//             if (input[i].Title.toLowerCase().includes('toppik') && input[i].SKU === undefined) {
//                 for (let j = 0; j <= input[i].Variations.Variation.length - 1; j++) {
//                     if (input[i].Variations.Variation[j].SKU === 'Toppik-dbrown') {
//                         input[i].Variations.Variation[j].VariationTitle = 'Toppik Fibers - Giant - Dark Brown';
//                         output.push(input[i]);
//                     } else if (input[i].Variations.Variation[j].SKU === 'Toppik-medbrown') {
//                         input[i].Variations.Variation[j].VariationTitle = 'Toppik Fibers - Giant - Medium Brown';
//                         output.push(input[i]);
//                     } else if (input[i].Variations.Variation[j].SKU === 'Toppik-black') {
//                         input[i].Variations.Variation[j].VariationTitle = 'Toppik Fibers - Giant - Black';
//                         output.push(input[i]);
//                     } else if (input[i].Variations.Variation[j].SKU === 'Toppik-lbrown') {
//                         input[i].Variations.Variation[j].VariationTitle = 'Toppik Fibers - Giant - Light Brown';
//                         output.push(input[i]);
//                     } else if (input[i].Variations.Variation[j].SKU === 'Toppik-medblonde') {
//                         input[i].Variations.Variation[j].VariationTitle = 'Toppik Fibers - Giant - Medium Blonde';
//                         output.push(input[i]);
//                     } else if (input[i].Variations.Variation[j].SKU === 'Toppik-aub') {
//                         input[i].Variations.Variation[j].VariationTitle = 'Toppik Fibers - Giant - Auburn';
//                         output.push(input[i]);
//                     } else if (input[i].Variations.Variation[j].SKU === 'Toppik-gray') {
//                         input[i].Variations.Variation[j].VariationTitle = 'Toppik Fibers - Giant - Gray';
//                         output.push(input[i]);
//                     } else if (input[i].Variations.Variation[j].SKU === 'Toppik-white') {
//                         input[i].Variations.Variation[j].VariationTitle = 'Toppik Fibers - Giant - White';
//                         output.push(input[i]);
//                         console.log(output);
//                     }
//                 }
//             }
//         }
//         return output;
    }
}

