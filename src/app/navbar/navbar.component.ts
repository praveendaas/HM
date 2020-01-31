import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CareersService } from '../careers.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  router: any;
  ngOnInit() {
    
  }
  angForm:FormGroup;
  email: string;
  password: string;
    constructor(private fb: FormBuilder,public afAuth: AuthService,private cs:CareersService){this.createForm(); }
    createForm() {  
      this.angForm = this.fb.group({  
        email:['',Validators.required],
        password: ['', Validators.required ]
      });  
    }
      
    signIn(angForm) {
      this.afAuth.SignIn(angForm.email.value, angForm.password.value);
      this.email = '';
      this.password = '';
      this.router.navigateByUrl('/careers/view');
      }
      signOut() {
        this.afAuth.SignOut();
        }

}
