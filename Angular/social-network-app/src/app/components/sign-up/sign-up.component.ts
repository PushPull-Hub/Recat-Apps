import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  // emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor() {}

  ngOnInit() {}
  signUp = () => {
    const userName = (<HTMLInputElement>(
      document.getElementById('inputUserName')
    )).value;
    const password = (<HTMLInputElement>(
      document.getElementById('inputPassword')
    )).value;
    const email = (<HTMLInputElement>document.getElementById('inputEmail'))
      .value;
    const firstName = (<HTMLInputElement>(
      document.getElementById('inputFirstName')
    )).value;
    const lasttName = (<HTMLInputElement>(
      document.getElementById('inputLastName')
    )).value;

    localStorage.setItem(
      'user',
      JSON.stringify({
        username: userName,
        password: password,
        email: email,
        firstname: firstName,
        lastname: lasttName,
      })
    );
  };
}
