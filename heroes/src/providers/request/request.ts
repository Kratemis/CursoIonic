import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {

  public url: string = 'https://api.punkapi.com/v2/beers';
  public beers: any;
  public actualId: number = 0;

  constructor(public http: HttpClient) {
    console.log('Hello RequestProvider Provider');
  }

  request() {
    return this.http.get(this.url);
  }
}
