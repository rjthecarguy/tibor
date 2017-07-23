import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the Report provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Report {

lat:any;
long:any;
pic: any;
date:any;
text:any;

pic1:any;
pic164: any;

feelsLike:any;
weatherLocation:any;



  constructor() {
    console.log('Hello Report Provider');
  }


  getDateTime () {

var todayDate = new Date().toLocaleDateString();
var todayTime = new Date().toLocaleTimeString();


	return todayDate + "\n" + todayTime; 


  }



}
