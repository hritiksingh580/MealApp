import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isloggedIn: boolean = true;
  isLoading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isloggedIn = !this.isloggedIn;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isloggedIn) {
      authObs = this.authService.login(email, password)
    } else {
      authObs = this.authService.SingUp(email, password)

    }

    authObs.subscribe(response => {
      console.log(response)
      this.isLoading = false;
    }, errorMsg => {
      console.log(errorMsg)
      this.error = errorMsg;
      this.isLoading = false;
    })
    form.reset()
  }

}
