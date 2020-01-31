import { Observable } from 'rxjs';

export class Careers {
    FirstName:String;
    LastName:String;
    Email:String;
    Phone:Number;
    Gender:String;
    DoorNo:String;
    Street:String;
    Line1:String;
    Line2:String;
    City:String;
    Pincode:String;
    State:String;
    Country:String;
    Resume:Observable<string>;
    LinkedIn:String;
    Experience:String;
    fileRef:any;
    Date:String;
}
