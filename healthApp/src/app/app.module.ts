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
import { SearchPipe } from '../pages/workout/searchPipe';
import { WorkoutDetailPage } from '../pages/workout/workoutDetail';
import { TemplatePage } from '../pages/template/template';
import { TemplateDetailPage } from '../pages/template/templateDetail';
import { TemplateDetailComponent } from '../pages/template/templateDetailComponent';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { SqlStorage } from '../common/sql';
import { FormsModule }   from '@angular/forms';
import { Common } from '../common/common';

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
    SearchPipe,
    WorkoutDetailPage,
    TemplateDetailPage,
    TemplatePage,
    TemplateDetailComponent
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
    WorkoutDetailPage,
    TemplateDetailPage,
    TemplatePage,
    TemplateDetailComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SqlStorage,
    Common,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
