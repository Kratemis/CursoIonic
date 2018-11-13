import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public service: RequestProvider) {

  }

  ionViewDidLoad() {
    this.service.request().subscribe(
      (data) => {
        this.service.items = data;
        console.log( this.service.people);

      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("completed");
      }
    )
  }

  doInfinite(infiniteScroll) {
    this.service.request(this.service.items.next).subscribe(
      (data) => {
        console.log(data);
        this.service.items = data;
        this.service.people = this.service.people.concat(this.service.items);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("completed");
      }
    )

  }
}
