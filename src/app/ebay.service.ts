import { Component, OnInit, Injectable } from '@angular/core';
import { Ebay } from './ebay.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EbayService implements OnInit {
  url = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://api.ebay.com/ws/api.dll';

  body = `
   <?xml version="1.0" encoding="utf-8"?>
   <GetMyeBaySellingRequest xmlns="urn:ebay:apis:eBLBaseComponents">
     <RequesterCredentials>
       <eBayAuthToken>v^1.1#i^1#I^3#f^0#p^3#r^0#t^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</eBayAuthToken>
     </RequesterCredentials>
   <ErrorLanguage>en_US</ErrorLanguage>
   <WarningLevel>High</WarningLevel>
   <ActiveList>
     <Include>true</Include>
     <Sort>TitleDescending</Sort>
     <Pagination>
       <EntriesPerPage>200</EntriesPerPage>
       <PageNumber>1</PageNumber>
     </Pagination>
     <DetailLevel>ReturnAll</DetailLevel>
   </ActiveList>
   <SoldList>
    <Include>true</Include>
    <DurationInDays>60</DurationInDays>
    <Pagination>
      <EntriesPerPage>200</EntriesPerPage>
      <PageNumber>1</PageNumber>
    </Pagination>
    <Sort>Title</Sort>
  </SoldList>
  </GetMyeBaySellingRequest>`;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public getEbayItems() {
    const headers = new HttpHeaders({
      'X-EBAY-API-SITEID': '0',
      'X-EBAY-API-COMPATIBILITY-LEVEL': '967',
      'X-EBAY-API-CALL-NAME': 'GetMyeBaySelling',
      'X-EBAY-API-DEV-NAME': '2f104d04-6217-441b-bceb-93cd1f3d7c84',
      'X-EBAY-API-APP-NAME': 'DazzleBe-1de2-4d9f-a9a3-384f7d8b954d',
      'X-EBAY-API-CERT-NAME': '18729826-2add-4cb0-bed0-94ae5ae6c8d9',
      'Content-Type': 'application/xml',
      Accept: 'application/xml',
      'Response-Type': 'text'
    });

    return this.http.post<Ebay>(this.url, this.body, { headers }).pipe(
      map(body => {
      return body;
      }));
  }

}
