import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { CareersShowComponent } from './careers-show/careers-show.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeBuildComponent } from './what-we-build/what-we-build.component';
import { FeaturesComponent } from './features/features.component';
import { ChatComponent } from './chat/chat.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PostComponent } from './post/post.component';
import { ForgotComponent } from './forgot/forgot.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  }, 
  {  
    path: 'home',  
    component: HomeComponent  
  },
  {
    path:'careers',
    component:CareersComponent
  },
  {
    path:'careers/view',
    component:CareersShowComponent
  },
  {
    path:'aboutus',
    component:WhoWeAreComponent
  },
  {
    path:'features',
    component:WhatWeBuildComponent
  },
  {
    path:'featuress',
    component:FeaturesComponent
  },
  {
    path:'chat',
    component:ChatComponent
  },
  {
    path:'advertisement',
    component:AdvertisementComponent
  },
  
  {
    path:'privacy',
    component:PrivacyComponent
  },
  {
    path:'post',
    component:PostComponent
  },
  {
    path:'forgot',
    component:ForgotComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 