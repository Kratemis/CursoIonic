import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hero } from '../../models/hero';
import { AddHeroPage } from '../add-hero/add-hero';
import { ResolveProvider } from '../../providers/resolve/resolve';
import { RequestProvider } from '../../providers/request/request';
import { DetailsPage } from '../details/details';

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
        this.service.beers = data;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("completed");
      }
    )
  }

  goToAddHero() {
    this.navCtrl.push(AddHeroPage);
  }

  goToDetails(idBeer) {
    this.service.actualId = idBeer;
    this.navCtrl.push(DetailsPage);
  }
}
