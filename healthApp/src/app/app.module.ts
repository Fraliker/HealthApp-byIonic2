import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/workoutlist/workoutlist';
import { CalendarPage } from '../pages/calendar/calendar';
import { OptionPage } from '../pages/option/option';
import { TestPage } from '../pages/test/test';
import { WorkoutPage } from '../pages/workout/workout';
import { WorkoutDetailPage } from '../pages/workout/workoutDetail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { SqlStorage } from '../common/sql';
import { FormsModule }   from '@angular/forms';
import * as Common from '../common/common';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListPage,
    CalendarPage,
    OptionPage,
    TestPage,
    WorkoutPage,
    WorkoutDetailPage
  ],
  imports: [
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListPage,
    CalendarPage,
    OptionPage,
    TestPage,
    WorkoutPage,
    WorkoutDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SqlStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(private sql: SqlStorage){

  }
  // constructor(public storage: Storage){
  //   this.storage.ready().then(() => {
  //       this.storage.get('workoutClass').then((val) => {
  //         if(!val) this.storage.set('workoutClass', JSON.stringify(Common.defaultWorkouts()));
  //       });
  //   });
  // }

}
