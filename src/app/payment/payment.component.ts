import { Component, OnInit } from '@angular/core';
import { Country } from './country';
import { State } from './state';
import { SelectService } from '../select.service';
import { NgForm,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Currency } from './currency';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payForm:FormGroup;
  payForm1:FormGroup;
  selectedCountry: Country = new Country(0, 'Select');
  countries: Country[];
  states: State[];
  currency: String;
  total:number;
  days:number;
  show:Boolean=false;
  country:String;
  show1: boolean;
  constructor(private selectService: SelectService, private fb:FormBuilder, ) { this.createForm(); this.createForm1();   }
  createForm() {  
    this.payForm = this.fb.group({  
      Country:['',Validators.required],
      State: ['', Validators.required ],   
      Currency: ['', Validators.required ],
      Days: ['', Validators.required ],
    });  
  }
  createForm1() {  
    this.payForm1 = this.fb.group({  
      Country:['',Validators.required],
      State: ['', Validators.required ],   
      Currency: ['', Validators.required ],
      Days: ['', Validators.required ],
    });  
  }
  amnt(payForm:FormData){
    this.days=this.payForm.controls['Days'].value;
    console.log(this.days);
    if(this.days==1)
    {
      this.show=true;
      this.total=1000;
    }
    if(this.days==3)
    {
      this.show=true;
      this.total=2800;
    }
    if(this.days==5)
    {
      this.show=true;
      this.total=4600;
    }
  }
  amnt1(aForm:FormData){
    this.days=this.payForm.controls['Days'].value;
    this.country=this.payForm.controls['Country'].value;
    console.log(this.days,this.country);
    if(this.country=='1')
    {
      this.show1=true;
      this.currency='$';
    }
    if(this.country=='2')
    {
      this.show1=true;
      this.currency='Dhinar';
    }
    if(this.country=='4')
    { 
      this.show1=true;      
      this.currency='Rs.';
    }
    if(this.country=='5')
    {
      this.show1=true;
      this.currency='Pakistani Rupee';
    }
    if(this.country=='6')
    {
      this.show1=true;
      this.currency='Singapore $';
    }
    if(this.country=='7')
    {
      this.show1=true;
      this.currency='Malaysian Ringgit';
    }
    
  }
  ngOnInit() {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
  }

  onSelect(countryid) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
    //this.currency=this.selectService.getCurrencies().filter((item)=>item.countryid == countryid)
  }

}
