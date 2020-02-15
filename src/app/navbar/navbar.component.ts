import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CareersService } from '../careers.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'firebase';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from '@angular/fire/storage'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  angForm:FormGroup;
  ads1:any;
  date1:Date;
  date=new Date();
   latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  ngOnInit() {
    this.getAds();
    this.getUsers();
  }
  constructor(
    public authService: UserService, private fb:FormBuilder,public datepipe: DatePipe,private af: AngularFireDatabase,private afs:AngularFireStorage
  ) { this.createForm(); 
     }
     getAds() {
      this.authService.getAds().snapshotChanges().pipe(
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
            //console.log(element.key);
          }
        });
      });
    }
    getUsers() {
      this.authService.getUsers().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(customers => {
        this.ads1 = customers;
        this.ads1.forEach(element => {
            //console.log(element);
        });
      });
    }
  createForm(){
    this.angForm = this.fb.group({  
      Email:['',Validators.required],
      Password: ['', Validators.required ], 

  });
}

}
