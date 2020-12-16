import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { LoginService } from './login-screen.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.minLength(5)),
      password: new FormControl('', Validators.minLength(8)),
    });
  }

  onLogin(): void {
    console.log("we are inside of onLogin :)");
    if(true) { //if creds are in DB
      this.router.navigateByUrl('/products')
      // this.router.navigateByUrl(RoutingComponents.)
    }
  }

  onCreateAccount(): void {
    console.log("we are inside of createAccount :)")
    // send to createAccount page
  }
}
