import { Component, OnInit, Injectable } from '@angular/core';
import { EbayService } from '../ebay.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  orders = [];
  inactiveItems = [];
  items = [];
  recentylySold = [];
  activelySelling = [];
  activelySellingNoDupVar = [];
  activelySellingNoDupNoVar = [];

  filterDuplicates = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  constructor(private ebay: EbayService) { }

  ngOnInit() { }

  getEbayItems() {
    this.ebay.getEbayItems().subscribe(
      data => {
        console.log(data);
        // tslint:disable-next-line:no-string-literal
        this.items = data['GetMyeBaySellingResponse'].ActiveList.ItemArray.Item;
        console.log(this.items);

        // tslint:disable-next-line:no-string-literal
        this.orders = data['GetMyeBaySellingResponse'].SoldList.OrderTransactionArray.OrderTransaction;
        console.log(this.orders);

        for (let i = 0; i <= this.orders.length - 1; i++) {
          if (this.orders[i].Transaction !== undefined) {
            this.recentylySold.push(this.orders[i].Transaction.Item.Title);
          } else if (this.orders[i].Order !== undefined) {
            for (let j = 0; j <= this.orders[i].Order.TransactionArray.Transaction.length - 1; j++) {
              this.recentylySold.push(this.orders[i].Order.TransactionArray.Transaction[j].Item.Title);
            }
          }
        }

        //Getting active items from recent orders
        for (let i = 0; i <= this.items.length - 1; i++) {
          if (this.items[i].QuantityAvailable === '0' && this.recentylySold.indexOf(this.items[i].Title) < 0) {
            this.inactiveItems.push(this.items[i]);
          } else if (this.items[i].QuantityAvailable > 0 || this.recentylySold.indexOf(this.items[i]) >= 0 || (this.items[i].QuantityAvailable === 0 && this.recentylySold.indexOf(this.items[i]) >= 0)) {
            if (this.items[i].Variations === undefined) {
              this.activelySelling.push(this.items[i]);
            } else if (this.items[i].Variations !== undefined) {
              for (let j = 0; j <= this.items[i].Variations.Variation.length - 1; j++) {
                this.activelySelling.push(this.items[i].Variations.Variation[j]);
              }
            }
          }
        }

        console.log(this.inactiveItems);

        // this.activelySelling.map(item => {
        //   if (item.VariationTitle === undefined) {
        //     return item.Title = item.Title.toLowerCase();
        //   } else if (item.VariationTitle !== undefined) {
        //     return item.VariationTitle = item.VariationTitle.toLowerCase();
        //   }
        // });

        //Resolve quantity across different listings for same product
        for (let i = 0; i <= this.activelySelling.length - 1; i++) {
          if (this.activelySelling[i].VariationTitle === undefined && this.activelySelling[i].SKU !== undefined) {
            const noVariation = this.activelySelling[i].SKU;
            for (let j = 0; j <= this.activelySelling.length - 1; j++) {
              if (this.activelySelling[j].VariationTitle === undefined && this.activelySelling[j].SKU === noVariation) {
                if (this.activelySelling[i].QuantityAvailable > this.activelySelling[j].QuantityAvailable) {
                  this.activelySelling[i].QuantityAvailable = this.activelySelling[j].QuantityAvailable;
                }
              } else if (this.activelySelling[j].VariationTitle !== undefined && this.activelySelling[j].SKU === noVariation) {
                if (this.activelySelling[i].QuantityAvailable > (this.activelySelling[j].Quantity - this.activelySelling[j].SellingStatus.QuantitySold)) {
                  this.activelySelling[i].QuantityAvailable = (this.activelySelling[j].Quantity - this.activelySelling[j].SellingStatus.QuantitySold);
                }
              }
            }
          } else if (this.activelySelling[i].VariationTitle !== undefined) {
            const hasVariation = this.activelySelling[i].SKU;
            for (let j = 0; j <= this.activelySelling.length - 1; j++) {
              if (this.activelySelling[j].VariationTitle === undefined && this.activelySelling[j].SKU === hasVariation && this.activelySelling[j].SKU !== undefined) {
                if ((this.activelySelling[i].Quantity - this.activelySelling[i].SellingStatus.QuantitySold) > this.activelySelling[j].QuantityAvailable) {
                  const variationQuant = this.activelySelling[i].Quantity - this.activelySelling[i].SellingStatus.QuantitySold;
                  const difference = variationQuant - this.activelySelling[j].QuantityAvailable;
                  const newQuantitySold = Number(this.activelySelling[i].SellingStatus.QuantitySold) + difference;
                  this.activelySelling[i].SellingStatus.QuantitySold = newQuantitySold.toString();
                }
              }
            }
          }

        }

        //Sort alphabetically
        this.activelySelling.sort(function (a, b) {
          const nameA = a.SKU;
          const nameB = b.SKU;
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

        //Remove dupplicate values
        for (let i = 0; i < this.activelySelling.length && true; i++) {
          for (let j = 0; j < this.activelySelling.length; j++) {
            if (i === j) {
              continue;
            } else if (this.activelySelling[i].SKU === this.activelySelling[j].SKU) {
              this.activelySelling.splice(i, 1);
            }
          }
        }


        console.log(this.activelySelling);
      }
    );
  }


}
