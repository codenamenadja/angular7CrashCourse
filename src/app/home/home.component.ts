import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  users: Object;

  constructor(private dService: DataService) { }

  ngOnInit(): void {
    this.dService.getUsers().subscribe((userListWeGot) => {
      this.users = userListWeGot;
      console.log(this.users);
    })
  }

  firstClick() {
    this.dService.logMsg(`home.component.ts`);
    window.alert(`HomeComponent.firstClick method work.`);
    window.alert(`welcome to home component!/ before change class-bind`);
    this.h1Style = !this.h1Style;
    window.alert(`changed home.html's h1-tag class. by class binding.`)
  }

}
