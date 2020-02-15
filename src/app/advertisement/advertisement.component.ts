import { Component, OnInit, Input, Output, EventEmitter,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { CareersService } from '../careers.service';
import { Router } from '@angular/router';
import { Category } from './Category';
import { Subcat } from './Subcat';
import { SelectCatService } from '../selectCatService.service';
import { concat } from 'rxjs';
import { Country } from './country';
import { State } from './state';
import { SelectService } from '../select.service';
import { Currency } from './currency';
import { HttpClient} from '@angular/common/http';
import * as moment from 'moment';
@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  fileData: File = null;
previewUrl:any = null;
  angForm:FormGroup;
  uploader:Boolean=true;
  previewer:Boolean=false;
  public ad:any;
  url: '';
  payForm: FormGroup;
  total: String;
  show:Boolean=false;
  email:Boolean=false;
  mobile:Boolean=false;
  selectedCategory: Category = new Category(0, 'Select');
  categories:Category[];
  subcats:Subcat[];
  contact1:String;
  description1:String;
  description2:String;
  maxChars = 120;
  role = '';
  chars = 0;   
  file1:String;
  selectedCountry: Country = new Country(0, 'Select');
  countries: Country[];
  states: State[];
  cat:Category[];
  subc:Subcat[];
  subc1:Number;
  cat1: Number;
  mob:Number;
  emai:String;
  cunt:Country[];
  state:State[];
  cunt1:Number;
  state1:Number;
  curren:Currency[];
  curren1:Currency[];
  cur:Number
  date3:String;
  today: number = Date.now();
  f_count:String;
  f_state:String;
  f_cat:String;
  f_subc:String;
  f_curren:Number;
  f_symbol:String;
  tran:String;
    gst:String;
  des: boolean;
  adimage: boolean;
  minDate = moment(new Date()).format('YYYY-MM-DD');
  
  constructor(private fb: FormBuilder,private selectService: SelectService, private css:CareersService,
    private cs:SelectCatService,private router:Router,private http:HttpClient) {
    this.createForm();   
    console.log(this.minDate+1)
   }
  createForm() {  
    this.payForm= this.fb.group({  
      Region:['',Validators.required],
      Amount:[{disabled: true},Validators.required],
      Category:[''],
      Subcat:['',Validators.required],
      Contact:['',Validators.required],
      Description:[''],
      Advertisement:[''],
      Country:[''],
      Mobile:['',Validators.required],
      Email:['',Validators.compose([Validators.required,Validators.email])],
      Days:['',Validators.required],
      Date:['',Validators.required],
      privacy:['',Validators.required]
    });  
  }

    onContact(payForm:FormData)
    {
      this.contact1=this.payForm.controls['Contact'].value;
      if(this.contact1=="Mobile")
      {
        this.mobile=true;
        this.email=false;
        this.payForm.get('Email').disable();
        this.payForm.get('Mobile').enable();
      }
      if(this.contact1=="Email")
      {
        this.mobile=false;
        this.email=true;
        this.payForm.get('Mobile').disable();
        this.payForm.get('Email').enable();
      }
    }
   
    onChanges(payForm:FormData)
    {
      this.description1=this.payForm.controls['Description'].value;
      
      if (this.description1 != null) {
        this.payForm.get('Advertisement').disable();
        this.payForm.get('Description').enable();
    }
    else {
        this.payForm.get('Description').disable();
      this.payForm.get('Advertisement').enable();
    }  
    }
    upload1(event:any)
    {
      this.ad=event.target["files"];
      if (this.ad != null) {
        this.payForm.get('Description').disable();
        this.payForm.get('Advertisement').enable();
        
       }
      else {
        this.payForm.get('Advertisement').disable();
        this.payForm.get('Description').enable();
       
      }
    }
    preview1(payForm:FormData)
    {
      if (this.ad != null) 
        {
          this.adimage=true;
          this.des=false;
        }
        else{
          this.des=true;
          this.adimage=false;
        }
        if (this.description1 != null) {
          this.des=true;
          this.adimage=false;
        }
        else{
          this.adimage=true;
          this.des=false;
        }
      this.show=true;
      this.cat1=this.payForm.controls['Category'].value;
      this.subc1=this.payForm.controls['Subcat'].value;
      this.mob=this.payForm.controls['Mobile'].value;
      this.emai=this.payForm.controls['Email'].value;
      this.cunt1=this.payForm.controls['Country'].value;
      this.state1=this.payForm.controls['Region'].value;
      this.date3=this.payForm.controls['Date'].value;
    
      this.description2=this.payForm.controls['Description'].value;
      this.cat=this.cs.getCategories().filter((item) => item.id == this.cat1);
    this.subc=this.cs.getSubcats().filter((item) => item.id == this.subc1);
    this.cunt=this.selectService.getCountries().filter((item) => item.id == this.cunt1);
    this.state=this.selectService.getStates().filter((item) => item.id == this.state1);
    for(let i of this.curren)
    {
       this.f_curren=i.rate;
       this.f_symbol=i.symbol;
       this.total=i.total;
       this.tran=i.tran;
       this.gst=i.gst;
       
    }
    for(let i of this.subc)
    {
      this.f_subc=i.name;
    }
    for(let j of this.cunt)
    {
      this.f_count=j.name;
    }
    for(let j of this.state)
    {
      this.f_state=j.name;
    }
    for(let j of this.cat)
    {
      this.f_cat=j.name;
    }
    
    console.log(payForm);
    }
   
    upload(event: any) {
      
      this.fileData = <File>event.target.files[0];
      this.preview();}

preview() {
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();     
  reader.readAsDataURL(this.fileData);
  reader.onload = (_event) => {
    this.previewUrl = reader.result;
  }
}
  ngOnInit() {
    this.categories = this.cs.getCategories();
    this.onSelect(this.selectedCategory.id);
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
    
  }
  public async addAds(payForm:FormData)
  {

    
    if(this.payForm.controls["Description"].value=="")
    {
      await this.css.addAdss(payForm,this.ad,this.f_cat,this.f_count,this.f_subc,this.f_state,this.total);
    }
    else
    {
      await this.css.addAdss1(payForm,this.f_cat,this.f_count,this.f_subc,this.f_state,this.total);
    }
    
  }

  onSelect(categoryid) {
    this.subcats = this.cs.getSubcats().filter((item) => item.categoryid == categoryid);
  }
  onSelect1(countryid) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
    this.curren=this.selectService.getCurrencies().filter((item)=>item.countryid == countryid);
     
  }
}
