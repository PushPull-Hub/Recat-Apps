import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  constructor() {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    if (this.user.email === email && this.user.password === password) {
      console.log('Registred ');
    }
  }
}
