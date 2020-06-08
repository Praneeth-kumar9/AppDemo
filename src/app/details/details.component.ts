import { Component, OnInit } from '@angular/core';
import { AppdataService } from '../services/appdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  holidays;
  name;
  constructor(private app:AppdataService, private route:ActivatedRoute) {
      this.alldata()
   }

  ngOnInit(): void {
      this.route.params.subscribe(response=>{
        this.name=response.nameis;
        console.log(this.name)
      });
  }
  alldata(){
    this.app.fetchAllHolidays().subscribe(param =>{
      this.holidays=param
      console.log(this.holidays);
    })
    }

}
