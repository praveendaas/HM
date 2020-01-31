import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CareersService } from '../careers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  angForm:FormGroup;
  uploader:Boolean=true;
  previewer:Boolean=false;
  public ad:any;
  url = '';
  payForm: FormGroup;
  total: number;
  show:Boolean=false;
  category: any;
  constructor(private fb: FormBuilder,
    private cs:CareersService,private router:Router) {
    this.createForm();
    this.createForm1();   
   }
   createForm() {  
    this.angForm = this.fb.group({  
      Title:['',Validators.required],
      Description: ['', Validators.required ],   
      Advertisement: ['', Validators.required ],
    });  
  }
  createForm1() {  
    this.payForm= this.fb.group({  
      City:['',Validators.required],
      Amount:['',Validators.required]
    });  
  }

  amnt(payForm:FormData){
    
      this.total=1000;
      console.log(this.total)
    }
    post(payForm:FormData)
    {
      this.category=this.payForm.controls["Amount"].value;
      this.show=true;
    }
  public upload($event:Event)
  {
    
    this.ad=$event.target["files"];    
  }
  public async addImage(angForm:FormData){
    this.router.navigateByUrl("/payment");
    //await this.cs.addCareers(angForm,this.ad);
   
  }
  ngOnInit() {
  }

}
