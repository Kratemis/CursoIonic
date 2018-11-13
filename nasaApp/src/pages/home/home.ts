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

  ionViewDidLoad(){
    this.service.request().subscribe(
      (data) => {
        console.log(data);
        this.service.photoToday = data;
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
