import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {


  }


openActionSheet(){
 console.log('opening');
 let actionsheet = this.actionSheetCtrl.create({
 title:"File a Report",
 buttons:[
 {
 text: 'Create a Photo/Video',
 handler: () => {
 console.log("Camera Clicked");
 }
 },{
 text: 'Browse Photo/Video',
 handler: function(){
 console.log("Gallery Clicked");
 }
 },{
 text: 'Continue Without Photo/Video',
 handler: function(){
 console.log("Gallery Clicked");
 }
 },{
 text: 'Cancel',
 handler: function(){
 console.log("Gallery Clicked");
 }
 }


 ]
 });
 actionsheet.present();
}


}
