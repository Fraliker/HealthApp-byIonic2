import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Common } from '../../common/common';
import { SqlStorage } from '../../common/sql';

@Component({
  selector: 'page-option',
  templateUrl: 'option.html'
})
export class OptionPage {

  constructor(
            public storage: Storage,
            public navCtrl: NavController,
            public toastCtrl: ToastController,
            public sql: SqlStorage,
            public commonFunc: Common,
            public alertCtrl: AlertController){

  }

  daytoMonth(){
              
        let confirm = this.alertCtrl.create({
            title: 'Delete',
            message: 'Would you like to delete all the history?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        // this.storage.ready().then(() => {
                        //     this.storage.clear();
                        //     this.commonFunc.presentToast(this.toastCtrl, 'Workout History Deleted.', 'top', '');
                        // });  
                        this.storage.ready().then(() => {
                            this.storage.forEach( (value, key, iterationNumber) => {
                                let regExp = new RegExp('(workout)([0-9]{6})([0-9]{2})');
                                if(regExp.test(key)){
                                    //console.log(key, iterationNumber, value);
                                    this.storage.remove(key);
                                }
                            });
                            this.commonFunc.presentToast(this.toastCtrl, 'Successfully removed.', 'top', '');
                        });  
                    }
                }
            ]
        });
        confirm.present();

    }

    dayToMonth(){
              
        let confirm = this.alertCtrl.create({
            title: 'Transfer',
            message: 'Would you like to transform day datas to month datas?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        this.storage.ready().then(() => {
                            this.storage.forEach( (value, key, iterationNumber) => {
                                let regExp = new RegExp('(workout)([0-9]{6})([0-9]{2})');
                                if(regExp.test(key)){
                                    //console.log(key, iterationNumber, value);
                                    let yyyymm = key.replace(regExp, '$2');
                                    let yyyymmdd = key.replace(regExp, '$2$3');

                                    this.storage.get('workout'+yyyymm).then((val)=>{
                                        if(val){
                                            let obj = JSON.parse(val);
                                            obj[yyyymmdd] = value;
                                            this.storage.set('workout'+yyyymm, JSON.stringify(obj));

                                        }else{
                                            let obj = [];
                                            obj[yyyymmdd] = value;
                                            this.storage.set('workout'+yyyymm, JSON.stringify(obj));
                                        }
                                    });
                                }
                            });

                            // this.storage.forEach( (value, key, iterationNumber) => {
                            //     console.log(key, value);
                            // });
                            this.commonFunc.presentToast(this.toastCtrl, 'Successfully Transformed.', 'top', '');
                        });  
                    }
                }
            ]
        });
        confirm.present();

    }

    deleteAll(){
              
        let confirm = this.alertCtrl.create({
            title: 'Delete',
            message: 'Would you like to delete all the history?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        this.storage.ready().then(() => {
                            this.storage.clear();
                            this.commonFunc.presentToast(this.toastCtrl, 'Workout History Deleted.', 'top', '');
                        });  
                    }
                }
            ]
        });
        confirm.present();

    }

    createInit(){
        let initQueuries = this.commonFunc.sqlStorageInit();
        for (let i = 0; i < initQueuries.length; i++) {
            this.sql.query(
                initQueuries[i]
                ).catch(err => {
                // console.error('Storage: Unable to create initial storage tables', err.tx, err.err);
            });
        }
        this.commonFunc.presentToast(this.toastCtrl, 'Workout Created', 'top', '');

    }


}
