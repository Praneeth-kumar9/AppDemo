import { Component, OnInit } from '@angular/core';
import { AppdataService } from '../services/appdata.service';

@Component({
  selector: 'app-todaylist',
  templateUrl: './todaylist.component.html',
  styleUrls: ['./todaylist.component.css']
})
export class TodaylistComponent implements OnInit {
databytoday=null;
  constructor(private app:AppdataService) { this.allHolidaysToday() }

  ngOnInit(): void {
  }
  headers=["Date","Holiday Name","Link"];
  head1=["Date","Name"];
  allHolidaysToday(){
    this.app.fetchHolidaysToday().subscribe(param =>{
      this.databytoday=param
      console.log(this.databytoday);
    })
    }
}
