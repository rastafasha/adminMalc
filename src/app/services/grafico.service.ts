import { Injectable } from '@angular/core';
import { Grafico } from '../models/grafico';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getGraficos() {
    return this.http.get<Grafico>(this.serverUrl + 'api_grafico/adminGraficos').pipe(
      catchError(this.handleError)
    );
  }

  getGrafico(id: number) {
    return this.http.get<Grafico>(this.serverUrl + 'api_grafico/adminGrafico/' + id).pipe(
      catchError(this.handleError)
    );
  }

  createGrafico(grafico) {
    return this.http.post<any>(this.serverUrl + 'api_grafico/createGrafico/', grafico)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateGrafico(grafico, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_grafico/updateGrafico/' + id, grafico)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteGrafico(id: number) {
    return this.http.delete(this.serverUrl + 'api_grafico/deleteGrafico/' + id).pipe(
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
