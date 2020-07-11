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
  isLoading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isloggedIn = !this.isloggedIn;
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    if (!this.isloggedIn) {
      this.authService.SingUp(form.value['email'], form.value['password'])
        
        .subscribe(response => {
          console.log(response)
          this.isLoading = false;
        }, error => {
          this.error = error;
          this.isLoading = false;
        })
    } else {
      this.authService.login(form.value['email'], form.value['password'])
      .subscribe(response => {
        console.log(response)
        this.isLoading = false;
      }, error => {
        this.error = error;
        this.isLoading = false;
      })
    }
    form.reset()
  }

}
