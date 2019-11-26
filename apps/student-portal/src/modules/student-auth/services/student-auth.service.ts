import { Injectable } from '@angular/core';
import { AccountRegistrationApiService } from '@sagit-frontend/shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentAuthService {

  constructor(private apiService: AccountRegistrationApiService) { }

  createUser(data): Observable<any>{
    return this.apiService.post(`users/create-account`, data);
  } 

  getUsers(): Observable<any[]>{
    return this.apiService.get(`users/create-account`);
  }
}
