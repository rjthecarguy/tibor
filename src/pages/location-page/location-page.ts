import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the LocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google;


@IonicPage()
@Component({
  selector: 'page-location-page',
  templateUrl: 'location-page.html',
})
export class LocationPage {


@ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap(){
 
     this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 19,
        mapTypeId: google.maps.MapTypeId.HYBRID
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


    let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: latLng
  });
 
    }, (err) => {
      console.log(err);
    });

 
  }

}
