import { Injectable } from '@angular/core';
import { Category } from './advertisement/Category';
import { Subcat } from './advertisement/Subcat';

@Injectable()
export class SelectCatService {

  getCategories() {
    return [
     new Category(1, 'Property' ),
     new Category(2, 'Recruitment' ),
     new Category(3, 'Business' ),
     new Category(4, 'Vehicle' ),
     new Category(5, 'Education' ),
     new Category(6, 'Services' ),
     new Category(7, 'Travel' ),
     new Category(8, 'Computers' ),
     new Category(9, 'Public Notice' ),
    ];
  }
  
  getSubcats() {
   return [
    new Subcat(1, 1, 'Buying' ),
    new Subcat(2, 1, 'Real Estate' ),
    new Subcat(3, 1, 'Rental' ),
    new Subcat(4, 1, 'Selling' ),
    new Subcat(5, 1, 'California' ),
    new Subcat(6, 2, 'Situation Vacant ' ),
    new Subcat(7, 2, 'Situation Abroad ' ),
    new Subcat(8, 3, 'Agents & Agencies ' ),
    new Subcat(9, 3, 'Business Offer ' ),
    new Subcat(10, 3, 'Business Offers/proposals' ),
    new Subcat(11, 3,'Consultancy ' ),
    new Subcat(12, 3, 'Machinery & Equipments' ),
    new Subcat(13,3, 'Miscellaneous ' ),
    new Subcat(14, 4, 'Buying ' ),
    new Subcat(15, 4, 'Selling ' ),
    new Subcat(16, 4, 'Rental' ),
    new Subcat(17, 6, 'General ' ),
    new Subcat(18, 6, 'Services ' ),
    new Subcat(23, 7, 'Adventure Holidays ' ),
    new Subcat(24, 7, 'Bus Rentals ' ),
    new Subcat(25, 7, 'Car Rentals ' ),
    new Subcat(26, 7, 'Drivers' ),
    new Subcat(27, 7, 'Guest Accommodation' ),
    new Subcat(28, 7, 'Honeymoon Packages ' ),
    new Subcat(29, 7, 'Hotels & Resorts' ),
    new Subcat(30, 7, 'Immigration ' ),
    new Subcat(31, 7, 'Local Destinations' ),
    new Subcat(32, 7, 'Package Tours' ),
    new Subcat(33, 7, 'Passport Assistance' ),
    new Subcat(34, 7, 'Religious Destination' ),
    new Subcat(35, 7, 'Ticketing ' ),
    new Subcat(36, 7, 'Time Share Resale & Rentals ' ),
    new Subcat(37, 7, 'Tours & Travels ' ),
    new Subcat(38, 7, 'Trade Fair ' ),
    new Subcat(39, 7, 'Travel Agencies' ),
    new Subcat(40, 7, 'Visa Assistance' ),
    new Subcat(41, 5, 'Institution' ),
    new Subcat(42,5, 'School' ),
    new Subcat(43, 8, 'Computer Furniture' ),
    new Subcat(44, 8, 'Computer Hardware ' ),
    new Subcat(45, 8, 'Computer Peripherals & Accessories ' ),
    new Subcat(46, 8, 'Computer Software ' ),
    new Subcat(47, 8, 'Hardware ' ),
    new Subcat(48, 8, 'Laptops' ),
    new Subcat(49, 8, 'Services & Maintenance ' ),
    new Subcat(50, 9, 'Court Notice ' ),
    new Subcat(51, 9, 'Loss of Share Certificate' ),
    new Subcat(52, 9, 'Lost and Found ' ),
    new Subcat(53, 9, 'Marriage Notice' ),
    new Subcat(54, 9, 'Property Notice ' ),
    new Subcat(55, 9, 'Public Notice ' ),

    ];
  }
  getCurrencies()
  {

  }

}