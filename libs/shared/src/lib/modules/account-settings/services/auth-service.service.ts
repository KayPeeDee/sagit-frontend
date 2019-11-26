import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountRegistrationApiService } from '../../data-access/services/account-registration-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: AccountRegistrationApiService) { }

  createUser(data): Observable<any>{
    return this.apiService.post(`users/create-account`, data);
  } 

  getUsers(): Observable<any[]>{
    return this.apiService.get(`users/create-account`);
  }
}
