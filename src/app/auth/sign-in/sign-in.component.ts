import { Component, OnInit } from '@angular/core';
export interface SignInForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor() {}
  signIn({email, password}:SignInForm) {
    if(!email || !password) {
      return
    }
  }

  ngOnInit() {}
}
