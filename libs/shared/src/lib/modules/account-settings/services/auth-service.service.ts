import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountRegistrationApiService } from '../../data-access/services/account-registration-api.service';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginData } from '../models/LoginDetails';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: AccountRegistrationApiService,
    // private jwtHelper: JwtHelperService
  ) { }

  createUser(data): Observable<any>{
    return this.apiService.post(`users/create-account`, data);
  } 

  getUsers(): Observable<any[]>{
    return this.apiService.get(`users/create-account`);
  }

  login(user: LoginData): Observable<any>{
    return this.apiService.post(`users/create-account/login`, user);
  }



}
