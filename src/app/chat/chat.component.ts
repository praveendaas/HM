import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Advertisement } from '../Advertisement';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { map } from 'rxjs/operators';
import { ReplacePipe } from '../replace.pipe';
import { Ads } from './ads';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  ads1:any;
  ads:any[];
  user:any;
  FirstName:String;
  LastName:String;
  Phone:Number;
  Emergency:Number;
  messages:any;
  date1:Date;
  date=new Date();
  key:string;
  Email:String;
  profile:String;
  i:number=0;
   latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  constructor(public rs:ReplacePipe,public cs: UserService, private fb:FormBuilder,public datepipe: DatePipe,private af: AngularFireDatabase,private afs:AngularFireStorage) { }
  getAds() {
    this.cs.getAds().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(customers => {
      this.ads1 = customers;
      this.ads1.forEach(element => {
        if(this.latest_date>element.Booking_Date)
          {
            this.af.object('/Advertisement/' + element.key).remove();
            this.afs.ref('/'+element.Path).delete();
          }
          else if (this.latest_date==element.Booking_Date)
          {
           
           this.ads.push(element);
          }
          
      });
      console.log(this.ads);
    });
  }
  getMessages(){
    this.cs.getMessages().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(messages => {
      this.messages = messages;
      this.messages.forEach(element => {
        //console.log(element);
      });
    });
  }
  getUsers(){
    this.cs.getUsers().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(user => {
      
      this.user = user;
      this.user.forEach(element => {
        this.key=this.rs.transform(element.key,',','.');
        if(this.cs.userData.email==element.mail)
        {
          //console.log(element.FirstName)
          this.FirstName=element.first;
          this.LastName=element.last;
          this.Phone=element.phone;
          this.Emergency=element.sos;
          this.Email=element.mail;
          //this.profile=element.profile.imageUrl;
           //console.log(element.profile.imageUrl)
        }
        
      });
    });
  }
  ngOnInit() {
    this.getAds();
    this.getMessages();
    this.getUsers();
    //console.log(this.latest_date)
  }
}
