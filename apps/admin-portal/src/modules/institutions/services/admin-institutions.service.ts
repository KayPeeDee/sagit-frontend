import { Injectable } from '@angular/core';
import { InstitutionsApiService } from '@sagit-frontend/shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminInstitutionsService {

  constructor(
    private apiService: InstitutionsApiService
  ) { }

  createInstitution(data): Observable<any>{
    return this.apiService.post(`institutions`, data);
  } 

  getInstitutions(): Observable<any[]>{
    return this.apiService.get(`institutions`);
  }
}
