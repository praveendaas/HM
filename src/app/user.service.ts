import { Injectable, NgZone } from '@angular/core';
import { User } from "../app/user";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Advertisement } from './Advertisement';
import { Message } from './message';
import { Friends } from './friends';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: any; 
  data: AngularFireList<any[]>;
  customersRef: AngularFireList<Advertisement> = null;
  userRef: AngularFireList<User> = null;
  msgRef: AngularFireList<Message> = null;
  frndRef: AngularFireList<Friends> = null;
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    private db: AngularFireDatabase,

    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {    
    this.customersRef = db.list('/Advertisement');
    this.userRef=db.list('/users');
    this.msgRef=db.list('/messages');
    this.frndRef=db.list('/friends');
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }
  SignIn(mail, password) {
    console.log(mail,password);
    return this.afAuth.auth.signInWithEmailAndPassword(mail,password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['chat']);
        });
        this.SetUserData(result.user);
        
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['chat']);
        })
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const userData: any = {
      key: user.email
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out 
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/home']);
    })
  }
  getAds(): AngularFireList<Advertisement>{
    return this.customersRef;
}
getUsers(): AngularFireList<User>{
  return this.userRef;
}
getMessages(): AngularFireList<Message>{
  return this.msgRef;
}
getFriends(): AngularFireList<Friends>{
  return this.frndRef;
}
}
