import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>;
  constructor(private angularFireAuth: AngularFireAuth,private router:Router) {
    this.userData = angularFireAuth.authState;
    }
  /* Sign in */
SignIn(email: string, password: string) {
  this.angularFireAuth
  .auth
  .signInWithEmailAndPassword(email, password)
  .then(res => {
  console.log('You are Successfully logged in!');
  this.router.navigateByUrl('/chat');
  })
  .catch(err => {
  console.log('Something is wrong:',err.message);
  });
  }
   
  /* Sign out */
  SignOut() {
  this.angularFireAuth
  .auth
  .signOut();
  }
}
