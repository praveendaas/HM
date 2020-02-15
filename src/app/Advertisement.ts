import { Observable } from 'rxjs';

export class Advertisement {
    Country:String;
    State:String;
    Amount:String;
    Contact:String;
    Category:String;
    SubCat:String;
    Advertisements:Observable<string>;
    Days:Number;
    Booking_Date:Date;
    Billing_Date:Date;
    key:String;
}
