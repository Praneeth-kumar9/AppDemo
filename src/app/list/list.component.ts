import { Component, OnInit } from '@angular/core';
import { AppdataService } from '../services/appdata.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private app:AppdataService) {
    this.allHolidays()
  }
  allholidays;
  ngOnInit(): void {
  }
  headers=["Date","Holiday Name","Link"];
  head1=["Date","Name"];
  allHolidays(){
    this.app.fetchAllHolidays().subscribe(param =>{
      this.allholidays=param
      console.log(this.allholidays);
    })
    }


}
