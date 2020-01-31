import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class AdvertiseService {
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
    return this.firestore.collection('advertisements').snapshotChanges();
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
    Title:postObj["Title"],
    Description:postObj["Description"],
    Advertisement:this.downLoadURL,
    fileRef:this.path,
    Date:this.jstoday
  }
  if( this.firestore.collection("advertisements").add(newCareers))
  {
    alert("Registered Succesfully");
      this.router.navigateByUrl('/');
  }
}
}
