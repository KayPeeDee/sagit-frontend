import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'sagit-frontend-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  @Output() userLoggedIn = new EventEmitter();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),

    });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  login(){
    const data = this.loginForm.value;
    // this.userLoggedIn.emit(data);
    this.authService.login(data).subscribe(
      res => {
        localStorage.setItem('token', res.access_token)
      }
    );
    console.log(this.getToken());
  }

}
