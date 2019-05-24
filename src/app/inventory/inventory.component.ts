import { Component, OnInit, Injectable } from '@angular/core';
import {Ebay} from '../ebay.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
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

filterDuplicates = (value, index, self) => {
  return self.indexOf(value) === index;
}

constructor(private ebay: EbayService) { }

  ngOnInit() {}

  getEbayItems() {
    this.ebay.getEbayItems().subscribe(
      data => {
        console.log(data);
        this.items = data['GetMyeBaySellingResponse'].ActiveList.ItemArray.Item;
        console.log(this.items);

        this.orders = data['GetMyeBaySellingResponse'].SoldList.OrderTransactionArray.OrderTransaction;
        console.log(this.orders);
        // console.log( data['GetMyeBaySellingResponse'].SoldList.OrderTransactionArray.OrderTransaction[1].Transaction.Item.Title);


        for (let i = 0; i <= this.orders.length - 1; i++) {
           if (this.orders[i].Transaction !== undefined) {
             this.recentylySold.push(this.orders[i].Transaction.Item.Title);
           } else if (this.orders[i].Order !== undefined) {
            for (let j = 0; j <= this.orders[i].Order.TransactionArray.Transaction.length - 1; j++) {
              this.recentylySold.push(this.orders[i].Order.TransactionArray.Transaction[j].Item.Title);
            }
           }
        }

        for (let i = 0; i <= this.items.length - 1; i++) {
          if (this.items[i].QuantityAvailable === '0' && this.recentylySold.indexOf(this.items[i].Title) < 0) {
            this.inactiveItems.push(this.items[i]);
          } else if (this.items[i].QuantityAvailable > 0 || this.recentylySold.indexOf(this.items[i]) >= 0) {
            this.activelySelling.push(this.items[i]);
          }
        }
        console.log(this.inactiveItems);
        console.log(this.activelySelling);
      }
    );
  }


}
