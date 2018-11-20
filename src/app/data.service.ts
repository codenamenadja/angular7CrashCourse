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
}