import { Injectable } from '@angular/core';
import { AccountRegistrationApiService } from '../../data-access/services/account-registration-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private apiService: AccountRegistrationApiService
  ) { }

  createUser(data): Observable<any>{
    return this.apiService.post(`users/create-account`, data);
  } 

  getUsers(): Observable<any[]>{
    return this.apiService.get(`users/create-account`);
  }

}
