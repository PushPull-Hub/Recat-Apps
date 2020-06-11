import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    console.log(f.value);
    const newPass = f.value.newpass;
    const newPassConfirmation = f.value.newconfirmedpass;
  }
}
