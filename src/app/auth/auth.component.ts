import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isloggedIn: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isloggedIn = !this.isloggedIn;
  }

  onSubmit(form: NgForm) {
    if (!this.isloggedIn) {
      this.authService.SingUp(form.value['email'], form.value['password'])
        .subscribe(response => {
          console.log(response)
        })
    } else {
      this.authService.login(form.value['email'], form.value['password'])
        .subscribe(response => {
          console.log(response);
        })
    }
    form.reset()
  }

}
