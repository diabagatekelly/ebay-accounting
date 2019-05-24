import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EbayService } from './ebay.service';
import { InventoryComponent } from './inventory/inventory.component';
import { BasicInterceptorService } from './basic-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EbayService, { provide: HTTP_INTERCEPTORS, useClass: BasicInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
