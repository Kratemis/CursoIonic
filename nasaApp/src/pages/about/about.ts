import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public service: RequestProvider) {

  }

  ionViewDidLoad(){
    
  }

  requestWithDate()
  {
    this.service.requestWithDate().subscribe(
      (data) => {
        console.log(data);
        this.service.photoSelected = data;
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
