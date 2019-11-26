import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/student-portal/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountRegistrationApiService  extends ApiService{

  constructor(http: HttpClient) { 
    super(http);
    this.server = `${environment.apiUrl}`;
  }
}
