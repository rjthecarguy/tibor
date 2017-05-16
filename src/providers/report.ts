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



  constructor() {
    console.log('Hello Report Provider');
  }

}
