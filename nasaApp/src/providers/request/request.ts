import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RequestProvider {

  public url: string = 'https://api.nasa.gov/planetary/apod?api_key=U0IcwotcYNlsrNFkV2OaA0QzPuMcEeO0PHXWZeit';
  public photoToday: any;
  public photoSelected: any;
  public date: any;

  constructor(public http: HttpClient) {
    console.log('Hello RequestProvider Provider');
  }

  request() {
    return this.http.get(this.url);
  }

  requestWithDate() {
    console.log(this.url + '&date=' + this.date);
    return this.http.get(this.url + '&date=' + this.date);
  }
}
