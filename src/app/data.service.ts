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
  getUsers(): Promise<Object> {
    // api for get fake db.
    // orginal
    // return this.http.get('https://reqres.in/api/users');
    //
    // error occoured!
    // new code
    return new Promise((res, rej) => {
      console.log('promise start - lev1');
      let httpCall;
      if (httpCall = this.http.get('https://reqres.in/api/users')) {
        console.log('http.get worked - lev2')
        res(httpCall);
      } else {
        console.error('error - lev2');
      }
    });
  }
}