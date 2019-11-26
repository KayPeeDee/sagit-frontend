import { Component, OnInit } from '@angular/core';
import { StudentAuthService } from '../services/student-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sagit-frontend-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private service: StudentAuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getUsers().subscribe(
      res => {
        console.log(res);
      }
    );
  }

  login(data){
    console.log(data);
    
  }

}
