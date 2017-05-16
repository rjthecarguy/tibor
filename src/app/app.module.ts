import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map-page/map-page';
import { ListPage } from '../pages/list/list';
import { PicturePage } from '../pages/picture-page/picture-page';
import { ActionSheet } from '../providers/action-sheet';
import { Report } from '../providers/report';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MapPage,
    PicturePage
      ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MapPage,
    PicturePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ActionSheet,
    Report,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
