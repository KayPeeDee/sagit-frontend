import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api-service/api.service';
import { environment} from 'apps/admin-portal/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InstitutionsApiService  extends ApiService{

  constructor(http: HttpClient) { 
    super(http);
    this.server = `${environment.apiUrl}`;
  }
}
