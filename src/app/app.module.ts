import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { CareersService } from './careers.service';
import { AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireStorageModule } from 'angularfire2/storage';
import { CareersShowComponent } from './careers-show/careers-show.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeBuildComponent } from './what-we-build/what-we-build.component';
import { FeaturesComponent } from './features/features.component';
import { ChatComponent } from './chat/chat.component';
import { PaymentComponent } from './payment/payment.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { SelectService } from './select.service';
import { PrivacyComponent } from './privacy/privacy.component';
import { AdvertisementHomeComponent } from './advertisement-home/advertisement-home.component';
import { PostComponent } from './post/post.component';
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
    PaymentComponent,
    AdvertisementComponent,
    PrivacyComponent,
    AdvertisementHomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule
  ],
  
  providers: [CareersService,AngularFirestore,SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
