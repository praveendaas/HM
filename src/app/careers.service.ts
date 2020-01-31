import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Careers } from "./careers.model";
import * as firebase from 'firebase'; 

import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CareersService {
  public downLoadURL: Observable<string>;
  public path:any;
  today=new Date();
  jstoday = '';
  constructor(
    private firestore: AngularFirestore,
    private storage:AngularFireStorage,
    private router: Router) {
      this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
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
    Date:this.jstoday
  }
  if( this.firestore.collection("careers").add(newCareers))
  {
    alert("Registered Succesfully");
      this.router.navigateByUrl('/');
  }
}
}
