import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CareersService } from '../careers.service';
import { Router } from '@angular/router';
import { Advertisement } from '../Advertisement';
import { UserService } from '../user.service';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  ads:any;
  adss:Advertisement;
  ads1: any;
  date=new Date();
  latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  constructor(public cs:UserService,public datepipe: DatePipe,private af: AngularFireDatabase,private afs:AngularFireStorage) {
    
  }
  getCustomersList() {
    this.cs.getAds().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(customers => {
      this.ads1 = customers;
      this.ads1.forEach(element => {
        if (this.latest_date==element.Booking_Date)
        {
          console.log(element.imageUrl);
        }
      });
    });
  }
  ngOnInit() {
    this.getCustomersList();
  }

}
