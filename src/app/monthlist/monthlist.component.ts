import { Component, OnInit } from '@angular/core';
import { AppdataService } from '../services/appdata.service';

@Component({
  selector: 'app-monthlist',
  templateUrl: './monthlist.component.html',
  styleUrls: ['./monthlist.component.css']
})
export class MonthlistComponent implements OnInit {

  constructor(private app:AppdataService) {
    this.allHolidaysbyMonth()
   }
  databymonth;
  month;
  today;
  requiredmonth;
  ngOnInit(): void {
  }
  headers=["Date","Holiday Name","Link"];
  head1=["Date","Name"];
  allHolidaysbyMonth(){
    this.app.fetchHolidaysByMonth().subscribe(param =>{
      this.databymonth=param
      console.log(this.databymonth);
    })
    }
}
