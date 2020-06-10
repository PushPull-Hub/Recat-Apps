import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  guest: string;
  user: { email: string; password: string };
  // emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor() {}

  ngOnInit() {}
  signUp = () => {
    const email = (<HTMLInputElement>document.getElementById('inputEmail'))
      .value;
    const password = (<HTMLInputElement>(
      document.getElementById('inputPassword')
    )).value;
    localStorage.setItem(
      this.guest,
      JSON.stringify({ password: password, email: email })
    );
  };
}
