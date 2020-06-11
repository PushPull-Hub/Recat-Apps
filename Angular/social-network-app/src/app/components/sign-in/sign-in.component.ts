import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  constructor() {}

  ngOnInit() {}

  signIn = () => {
    const email = (<HTMLInputElement>document.getElementById('InputEmail1'))
      .value;
    const password = (<HTMLInputElement>(
      document.getElementById('InputPassword1')
    )).value;
    console.log(this.user);
    if (this.user.email === email && this.user.password === password) {
      console.log('Registred ');
    }
  };
}
