import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  firstClick() {
    window.alert(`HomeComponent.firstClick method work.`);
    window.alert(`welcome to home component!/ before change class-bind`);
    this.h1Style = !this.h1Style;
    window.alert(`changed home.html's h1-tag class. by class binding.`)
  }

}
