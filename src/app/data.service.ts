import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  logMsg(msg: string): void {
    return console.log(`executed during, ${msg}.`);
  }
}
