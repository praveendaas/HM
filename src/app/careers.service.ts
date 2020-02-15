import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Careers } from "./careers.model";
import * as firebase from 'firebase'; 
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatDate, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CareersService {
  public downLoadURL: Observable<string>;
  public path:any;
  date= new Date();
  latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd h:mm a');
  constructor(
    private firestore: AngularFirestore,
    private storage:AngularFireStorage,
    private db: AngularFireDatabase,
    private datepipe: DatePipe,
    private router: Router) {
     }
     getAds() {
      return this.firestore.collection("careers").valueChanges();
         
      }
      
  getCareers() {
    return this.firestore.collection('careers').snapshotChanges();
}
public async uploadFile(files:any[])
{
  const file=files[0];
  this.path=Date.now()+"-"+files[0]["name"];
  const fileRef=this.storage.ref(this.path);
  const task =this.storage.upload(this.path, file);
  await task.snapshotChanges().toPromise();
  this.downLoadURL=await fileRef.getDownloadURL().toPromise();
}
public async addCareers(postObj:FormData,files:any[]){
  await this.uploadFile(files);
  let newCareers={
    FirstName:postObj["FirstName"],
    LastName:postObj["LastName"],
    Email:postObj["Email"],
    Phone:postObj["Phone"],
    Gender:postObj["Gender"],
    DoorNo:postObj["DoorNo"],
    Street:postObj["Street"],
    Line1:postObj["Line1"],
    Line2:postObj["Line2"],
    City:postObj["City"],
    Pincode:postObj["Pincode"],
    State:postObj["State"],
    Resume:this.downLoadURL,
    fileRef:this.path,
    Country:postObj["Country"],
    LinkedIn:postObj["LinkedIn"],
    Experience:postObj["Experience"],
    Date:this.latest_date
  }
  const obj = this.db.database.ref("Careers");
  obj.push(newCareers);
    alert("Posted Succesfully");
      this.router.navigateByUrl('/');
}
public async uploadAd(files:any[])
{
  const file=files[0];
  this.path=Date.now()+"-"+files[0]["name"];
  const fileRef=this.storage.ref(this.path);
  console.log(this.path)
  const task =this.storage.upload(this.path, file);
  await task.snapshotChanges().toPromise();
  this.downLoadURL=await fileRef.getDownloadURL().toPromise();
}
public async addAdss(postObj:FormData,files:any[],Category:String,Country:String,Subcat:String,State:String,Currency:String)
{
  await this.uploadAd(files);
  let newAd={
    Country:Country,
    State:State,
    Category:Category,
    Subcat:Subcat,
    Contact:postObj["Email"] || postObj["Mobile"],
    imageUrl:this.downLoadURL,
    Path:this.path,
    Days:postObj["Days"],
    Booking_Date:postObj["Date"],
    Billing_Date:this.latest_date,
    Amount:Currency
  }
  const obj = this.db.database.ref('Advertisement');
  obj.push(newAd);
    alert("Posted Succesfully");
      this.router.navigateByUrl('/');
}
public async addAdss1(postObj:FormData,Category:String,Country:String,Subcat:String,State:String,Currency:String)
{
  let newAd={
    Advertisements:postObj["Description"],
    Amount:Currency,
    Billing_Date:this.latest_date,
    Booking_Date:postObj["Date"],
    Category:Category,
    Contact:postObj["Email"] || postObj["Mobile"],
    Country:Country,
    Days:postObj["Days"],
    Path:'',
    State:State,
    Subcat:Subcat,
  }
  const obj = this.db.database.ref('Advertisement');
  obj.push(newAd);
    alert("Posted Succesfully");
      this.router.navigateByUrl('/');
}
}
