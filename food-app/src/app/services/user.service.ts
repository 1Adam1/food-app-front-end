import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserUpdateRequestData } from '../model/api/requests/user.request-date';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  updateLogedUser(userUpdateData: UserUpdateRequestData): Observable<boolean> {
    return this.http
      .patch(`${environment.url}/users/me`,
        userUpdateData
      )
      .pipe(
        catchError(this.handleError),
        mapTo(true)
      );
  }

  getLogedUser(): Observable<boolean> {
    return this.http
    .get(`${environment.url}/users/me`)
    .pipe(
      catchError(this.handleError),
      mapTo(true)
    );
  }
  
  deleteLogedUser(): Observable<boolean> {
    return this.http
      .delete(`${environment.url}/users/me`)
      .pipe(
        catchError(this.handleError),
        mapTo(true)
      );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    return throwError('Error');
  }
}
