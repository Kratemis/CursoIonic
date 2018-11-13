import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RequestProvider {

  public url: string = 'https://swapi.co/api/planets/';
  public items: any;
  public people: any[] = new Array<any>();
  constructor(public http: HttpClient) {
    console.log('Hello RequestProvider Provider');
  }

  request(myUrl?: string) {
    if(myUrl) {
      return this.http.get(myUrl);
    }else{
      return this.http.get(this.url);
    }
  }
}
