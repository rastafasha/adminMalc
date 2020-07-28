import { Injectable } from '@angular/core';
import { Seo } from '../models/seo';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSeos() {
    return this.http.get<Seo>(this.serverUrl + 'api_seo/adminSeos').pipe(
      catchError(this.handleError)
    );
  }

  getSeo(id: number) {
    return this.http.get<Seo>(this.serverUrl + 'api_seo/adminSeo/' + id).pipe(
      catchError(this.handleError)
    );
  }

  createSeo(seo) {
    return this.http.post<any>(this.serverUrl + 'api_seo/createSeo/', seo)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateSeo(seo, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_seo/updateSeo/' + id, seo)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteSeo(id: number) {
    return this.http.delete(this.serverUrl + 'api_seo/deleteSeo/' + id).pipe(
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
