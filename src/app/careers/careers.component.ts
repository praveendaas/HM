import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Careers } from '../careers.model';
import { CareersService } from '../careers.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collectExternalReferences } from '@angular/compiler';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  angForm:FormGroup;
  
  public resume:any;
  constructor(private fb: FormBuilder,
    private cs:CareersService,private router:Router) {
    this.createForm();   
   }
   createForm() {  
    this.angForm = this.fb.group({  
      FirstName:['',Validators.required],
      LastName: ['', Validators.required ],   
      Email: ['', Validators.required ],
      Phone: ['', Validators.required ],
      Gender:['',Validators.required],
      DoorNo: ['', Validators.required ],
      Street: ['', Validators.required ],
      Line1: ['', Validators.required ],  
      Line2: ['', Validators.required ],  
      City: ['', Validators.required ],  
      Country: ['', Validators.required ],  
      State: ['', Validators.required ], 
      Pincode: ['', Validators.required ],
      Resume: ['', Validators.required ], 
      LinkedIn:['', Validators.required ],
      Experience:['', Validators.required ],
    });  
  }
  public upload($event:Event)
  {
    this.resume=$event.target["files"];
  }
  public async addCareers(angForm:FormData){
    await this.cs.addCareers(angForm,this.resume);
  }
  ngOnInit() {
    
  }
 
}
