import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'sagit-frontend-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  @Output() userLoggedIn = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),

    });
  }

  login(){
    const data = this.loginForm.value;
    this.userLoggedIn.emit(data);
  }

}
