import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public server;

  constructor(private http: HttpClient) {}

  get<T>(
    path: string,
    params: HttpParams = new HttpParams(),
    contentType: string = null
  ): Observable<T> {
    return this.http
      .get<T>(`${this.server}${path}`, {
        headers: this.setHeaders(contentType),
        params: params
      })
      .pipe(catchError(this.formatErrors));
  }

  post<T>(
    path: string,
    body: Object,
    params: HttpParams = new HttpParams(),
    contentType: string = null
  ): Observable<T> {
    return this.http
      .post<T>(`${this.server}${path}`, body, {
        headers: this.setHeaders(contentType),
        params: params
      })
      .pipe(catchError(this.formatErrors));
  }

  put<T>(
    path: string,
    body: Object = {},
    params: HttpParams = new HttpParams(),
    contentType: string = null
  ): Observable<T> {
    return this.http
      .put<T>(`${this.server}${path}`, JSON.stringify(body), {
        headers: this.setHeaders(contentType),
        params: params
      })
      .pipe(catchError(this.formatErrors));
  }

  patch<T>(
    path: string,
    body: Object = {},
    contentType: string = null
  ): Observable<T> {
    return this.http
      .patch<T>(`${this.server}${path}`, JSON.stringify(body), {
        headers: this.setHeaders(contentType)
      })
      .pipe(catchError(this.formatErrors));
  }

  delete<T>(
    path,
    contentType: string = null,
    params: HttpParams = new HttpParams()
  ): Observable<T> {
    return this.http
      .delete<T>(`${this.server}${path}`, {
        headers: this.setHeaders(contentType),
        params: params
      })
      .pipe(catchError(this.formatErrors));
  }

  file(path: string, file: File, contentType: string = null): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http
      .post(`${this.server}${path}`, formData)
      .pipe(catchError(this.formatErrors));
  }

  getFile(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<Blob> {
    return this.http.get(`${this.server}${path}`, {
      responseType: 'blob',
      params: params
    });
  }

  public upload<T>(path: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.request(
      new HttpRequest('POST', `${this.server}${path}`, formData, {
        reportProgress: false
      })
    );
  }

  private setHeaders(contentType: string = null): HttpHeaders {
    const headersConfig = {
      Accept: 'application/json'
    };

    switch (contentType) {
      case 'file':
        break;

      case 'form-data':
        headersConfig['Content-Type'] = `application/x-www-form-urlencoded`;
        break;

      case 'multipart-form-data':
        headersConfig['Content-Type'] = `multipart/form-data`;
        break;

      default:
        headersConfig['Content-Type'] = `application/json`;
        break;
    }

    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: Error) {
    return throwError(error);
  }
}
