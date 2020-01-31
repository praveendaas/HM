import { Component, OnInit } from '@angular/core';
import { Careers } from '../careers.model';
import { CareersService } from '../careers.service';

@Component({
  selector: 'app-careers-show',
  templateUrl: './careers-show.component.html',
  styleUrls: ['./careers-show.component.css']
})
export class CareersShowComponent implements OnInit {
 
  careers:Careers[];
  constructor(private cs:CareersService) { }

  ngOnInit() {
    this.cs.getCareers().subscribe(data => {
      this.careers = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Careers;
      })
      console.log(this.careers);
    });
  }

}
