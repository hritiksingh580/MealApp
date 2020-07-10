import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isloggedIn: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isloggedIn = !this.isloggedIn;
  }

}
