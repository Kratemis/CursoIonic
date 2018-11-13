import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AndroidExoplayer } from '@ionic-native/android-exoplayer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public androidExoPlayer: AndroidExoplayer) {

  }

  play() {
    this.androidExoPlayer.show({url: 'https://www.youtube.com/watch?v=aCX7GMx6EDc'});
  }

}
