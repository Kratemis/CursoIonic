import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { ResolveProvider } from '../providers/resolve/resolve';
import { AddHeroPage } from '../pages/add-hero/add-hero';
import  { HttpClientModule } from '@angular/common/http'
import { RequestProvider } from '../providers/request/request';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    AddHeroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    AddHeroPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ResolveProvider,
    RequestProvider
  ]
})
export class AppModule {}
