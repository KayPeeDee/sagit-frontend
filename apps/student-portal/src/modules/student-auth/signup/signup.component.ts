import { Component, OnInit } from '@angular/core';
import { AuthService } from '@sagit-frontend/shared';

@Component({
  selector: 'sagit-frontend-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private service: AuthService
  ) { }

  ngOnInit() {
  }

  register(data){
    console.log(data);
    this.service.createUser(data).subscribe(
      res => {
        console.log(res);
      }, 
      error => {
        console.log(error);
      }
    );
  }

}
