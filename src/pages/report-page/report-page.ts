import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Report} from '../../providers/report'
/**
 * Generated class for the ReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-page',
  templateUrl: 'report-page.html',
})
export class ReportPage {

reportText : any = "";
testRadioOpen = false;
  testRadioResult: any;
  testCheckboxOpen = false;
  testCheckboxResult: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public report:Report) {

  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }


addText() {


	this.reportText += this.report.getDateTime();
	this.reportText += " - Arrived at scene \n\n";
}


inCustody() {


	this.reportText += this.report.getDateTime();
	this.reportText += " - Suspect In Custody \n\n";
}

callType() {

	let alert = this.alertCtrl.create();
    alert.setTitle('Report Type');

    alert.addInput({
      type: 'radio',
      label: 'Accident',
      value: 'Accident',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Alarm',
      value: 'Alarm'
    });

    alert.addInput({
      type: 'radio',
      label: 'Assault',
      value: 'Assault'
    });

    alert.addInput({
      type: 'radio',
      label: 'Theft',
      value: 'Theft'
    });

    alert.addInput({
      type: 'radio',
      label: 'Traffic Stop',
      value: 'Traffic Stop'
    });

    alert.addInput({
      type: 'radio',
      label: 'Unknown',
      value: 'Unknown'
    });

   

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.reportText = this.report.getDateTime();
        this.reportText += " - " + data + " Reported\n\n";
      }
    });

    alert.present();
  }

 
 

}
