import { Injectable } from '@angular/core';
import { Webdesing } from '../models/webdesing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebdesingService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getWebdesings() {
    return this.http.get<Webdesing>(this.serverUrl + 'api_webdesing/adminWebdesings').pipe(
      catchError(this.handleError)
    );
  }

  getWebdesing(id: number) {
    return this.http.get<Webdesing>(this.serverUrl + 'api_webdesing/adminWebdesing/' + id).pipe(
      catchError(this.handleError)
    );
  }

  createWebdesing(webdesing) {
    return this.http.post<any>(this.serverUrl + 'api_webdesing/createWebdesing/', webdesing)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateWebdesing(webdesing, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_webdesing/updateWebdesing/' + id, webdesing)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteWebdesing(id: number) {
    return this.http.delete(this.serverUrl + 'api_webdesing/deleteWebdesing/' + id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
