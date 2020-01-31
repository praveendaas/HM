import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CareersService } from '../careers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  angForm:FormGroup;
  uploader:Boolean=true;
  previewer:Boolean=false;
  public ad:any;
  url = '';
  payForm: FormGroup;
  total: number;
  constructor(private fb: FormBuilder,
    private cs:CareersService,private router:Router) {
    this.createForm();  
   }
   createForm() {  
    this.angForm = this.fb.group({  
      Title:['',Validators.required],
      Description: ['', Validators.required ],   
      Advertisement: ['', Validators.required ],
    });  
  }
  ngOnInit() {
  }

}
