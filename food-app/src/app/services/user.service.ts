import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, mapTo, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserUpdateRequestData } from '../model/api/requests/user.request-data';
import { UserResponseData } from '../model/api/responses/user.response-data';
import { UserData } from '../model/interfaces/user-data.interface';
import { ObjectConverterService } from './object-converter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private converter: ObjectConverterService) { }

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

  getLogedUser(): Observable<UserData> {
    return this.http
    .get(`${environment.url}/users/me`)
    .pipe(
      catchError(this.handleError),
      map(result => this.processFetchedUserData(result as UserResponseData))
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

  private processFetchedUserData(data: UserResponseData): UserData {
    const user = data.user;

    return this.converter.convertResponseToObject<UserData>(user);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    return throwError('Error');
  }
}
