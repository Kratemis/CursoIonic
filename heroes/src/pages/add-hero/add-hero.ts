import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResolveProvider } from '../../providers/resolve/resolve';
import { Hero } from '../../models/hero';

/**
 * Generated class for the AddHeroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-hero',
  templateUrl: 'add-hero.html',
})
export class AddHeroPage {
  public name: string = '';
  public description: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceResolver: ResolveProvider) {
  }

  ionViewDidLoad() {
  }

  addHero() {
    this.serviceResolver.addHero(this.name, this.description);
    this.navCtrl.pop();
  }

  
}
