import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  logMsg(msg: string): void {
    return console.log(`executed during, ${msg}.`);
  }
  getUsers(): object {
    // api for get fake db.
    return this.http.get('https://reqres.in/api/users');
  }
}