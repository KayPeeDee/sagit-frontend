import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'sagit-frontend-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  @Output() userRegistered = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.registerForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      username: new FormControl(''),
      emailAddress: new FormControl(''),
      groupId: new FormControl('STUDENT'),
      password: new FormControl(''),


      dateCreated: new FormControl(''),
      accountActive: new FormControl(''),
      lastModifiedDate: new FormControl(''),
      accountLocked: new FormControl(''),
      accountLockedAt: new FormControl(''),

    });
  }  

  register(){
    const data = this.registerForm.value;
    console.log(data);
    this.userRegistered.emit(data);
  }



}
