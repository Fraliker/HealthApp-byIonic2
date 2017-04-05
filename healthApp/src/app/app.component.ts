import { Component, ViewChild } from '@angular/core';
import { Platform, App, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ListPage } from '../pages/workoutlist/workoutlist';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav
  rootPage:any = ListPage;
  listPage:any = ListPage;
  homePage:any = HomePage;
  aboutPage:any = AboutPage;
  contactPage:any = ContactPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              app: App, public menu: MenuController, storage: Storage) {
    menu.enable(true);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    //storage
      storage.ready().then(() => {
        let history = [
          {
            workoutId: 'pushup',
            name: 'Push Up',
            goal: 80,
            done: 0,
            units: [5,10,15]
          },
          {
            workoutId: 'dumbel',
            name: 'Dumbel',
            goal: 100,
            done: 0,
            units: [5,10,15],
            weight: 7,
            weightUnit: 'kg'
          }
        ];
        storage.set('workout20170404', JSON.stringify(history));
        storage.set('workout20170305', JSON.stringify(history));
      });
  }

  openPage(page){
      this.nav.push(page);
      this.menu.close();
  }
}
