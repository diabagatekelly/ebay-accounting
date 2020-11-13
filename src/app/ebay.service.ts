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
       <eBayAuthToken>AgAAAA**AQAAAA**aAAAAA**6dflXA**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6AFloKhDZGDqAmdj6x9nY+seQ**WWoCAA**AAMAAA**0Jt+W/hCSUSF6YL3fdIFIV5a/cOqhRVo89Siu4O6H8ZM/E2hTqxaEHS8xjRkSz+CCYhM3iBeh24C8tUW0AjJIVs1tnqIyybEAn3h4/rEDsrbGrFe42mduy1mDMljdfl97f1KmPRQCyiP9B1WcEVhkQ4NJ6zXTg9tgMvSHK3aqhFvTEAikb9MbVEWwECdphYzyJVsiYfwWx8S2hFKq4HeOoTAWKcKRMlOMptAUMd+EMKXnhdog3BOiHPuv0yX2+7Pk2S/wME123kTVmJqEB5X+G0hUnQi8Cgo0QB4yNoa6uvrR7XItkJ10Bq1RaohkodK+/vw8OvQEuCfIMGgXkszhSdJubE2NppLCj85o+aoVR+X2U9UhFj8L6P21MF/k36aerm1qGX7QPSs0zIXYD9BEAjGPxRSQd1GLn6xQ9UL2BIpVlU32l3dJG0vV7ZEqSvfkBE1/EnXkn8u6d7DjRK02+SBGfN0k7/fURr2nxRp7yUTl3Umc6x8vo+5lzKWpW6iUPWlvu9+K/QH9Itt+gQhnl4y5jR3sas557D6FtQxIkYu6iPoQ+6cMR5G9OREjMsb31MUSWmrNSU4wGUuQ1AP6ECC35Ou1c/3ZL3rc48V06nE+P7EzOHjOghxuCHnVjFJ6XdmGpYgfRfR2nrNzjiNkCGDt39JV0QH0QAn3/FKSGeTNycHrWRy6YhtuZk8JpW/zyS5fVvJ7+wnUAgdudXaNyyLQV4zgiqh6E1Sf/EY6GU4cH0Navb5hCLZk0UuDPEH</eBayAuthToken>
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
