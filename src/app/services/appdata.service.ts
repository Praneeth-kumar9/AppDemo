import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppdataService {
  constructor(private http: HttpClient) { }
  fetchAllHolidays(){
    return this.http.get('http://127.0.0.1:5000/Holidays ')
  }
  fetchHolidaysByMonth(){
    return this.http.get('http://127.0.0.1:5000/monthHolidays')
  }
  fetchHolidaysToday(){
    return this.http.get('http://127.0.0.1:5000/todayHolidays')
  }
}
