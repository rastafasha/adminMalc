import { Injectable } from '@angular/core';
import { Videofolio } from '../models/videofolio';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideofolioService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getVideofolios() {
    return this.http.get<Videofolio>(this.serverUrl + 'api_videofolio/adminVideofolios').pipe(
      catchError(this.handleError)
    );
  }

  getVideofolio(id: number) {
    return this.http.get<Videofolio>(this.serverUrl + 'api_videofolio/adminVideofolio/' + id).pipe(
      catchError(this.handleError)
    );
  }

  createVideofolio(videofolio) {
    return this.http.post<any>(this.serverUrl + 'api_videofolio/createVideofolio/', videofolio)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateVideofolio(videofolio, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_videofolio/updateVideofolio/' + id, videofolio)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteVideofolio(id: number) {
    return this.http.delete(this.serverUrl + 'api_videofolio/deleteVideofolio/' + id).pipe(
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
