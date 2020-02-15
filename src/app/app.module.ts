import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { CareersService } from './careers.service';

import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireStorageModule } from 'angularfire2/storage';
import { CareersShowComponent } from './careers-show/careers-show.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeBuildComponent } from './what-we-build/what-we-build.component';
import { FeaturesComponent } from './features/features.component'; 
import { ChatComponent } from './chat/chat.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { SelectService } from './select.service';
import { PrivacyComponent } from './privacy/privacy.component';
import { PostComponent } from './post/post.component';
import { SelectCatService } from './selectCatService.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { ForgotComponent } from './forgot/forgot.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DatePipe } from '@angular/common';
import { ReplacePipe } from './replace.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareersComponent,
    CareersShowComponent,
    LayoutComponent,
    NavbarComponent,
    WhoWeAreComponent,
    WhatWeBuildComponent,
    FeaturesComponent,
    ChatComponent,
    AdvertisementComponent,
    PrivacyComponent,
    PostComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    DatePickerModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule
  ],
  
  providers: [CareersService,SelectService, SelectCatService,UserService,DatePipe,ReplacePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
