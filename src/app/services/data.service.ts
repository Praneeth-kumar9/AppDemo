import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private firstmessage = new BehaviorSubject('hello');
  public currentmessage = this.firstmessage.asObservable();

  update(message: string){
    this.firstmessage.next(message)
  }

  FetchAllHolidays()
  {
    return this.http.get(`http://127.0.0.1:5000/Holidays`)
  }

}
