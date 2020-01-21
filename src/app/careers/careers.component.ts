import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  angForm:FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();   
   }
   createForm() {  
    this.angForm = this.fb.group({  
      FirstName:['',Validators.required],
      LastName: ['', Validators.required ],   
      Email: ['', Validators.required ],
      Phone: ['', Validators.required ],
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
  addForm(FirstName,LastName,Email,Phone,DoorNo,Street,Line1,Line2,City,Pincode,State,Country,Resume,LinkedIn,Experience)
  {
    const obj={FirstName,LastName,Email,Phone,DoorNo,Street,Line1,Line2,City,Pincode,State,Country,Resume,LinkedIn,Experience};
    console.log(obj);
  }
  ngOnInit() {
  }

}
