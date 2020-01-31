import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HaiPals';
  email: string;
password: string;
  constructor(public afAuth: AuthService){}
  signIn() {
    this.afAuth.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
    }
    signOut() {
      this.afAuth.SignOut();
      }
}
