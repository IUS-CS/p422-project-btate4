import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  form: FormGroup;
  constructor( private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.minLength(5)),
      password: new FormControl('', Validators.minLength(8)),
    });
  }

  onLogin(): void {
    console.log("we are inside of onLogin :)");
    this.router.navigate(['home']);
    // need to do some validating.
    // if passes go to home, if fails throw error and tell them to try again
  }

  onCreateAccount(): void {
    console.log("we are inside of createAccount :)")
    // send to createAccount page
  }
}
