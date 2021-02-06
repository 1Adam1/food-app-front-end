import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, throwError } from 'rxjs';
import { catchError, mapTo, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserUpdateRequestData } from '../model/api/requests/user.request-data';
import { UserResponseData } from '../model/api/responses/user.response-data';
import { UserData } from '../model/interfaces/user-data.interface';
import { AuthenticationService } from './authentication.service';
import { ObjectConverterService } from './object-converter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private converter: ObjectConverterService, private authenticationService: AuthenticationService) { }

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

  private processFetchedUserData(data: UserResponseData): UserData {
    const user = data.user;

    return this.converter.convertResponseToObject<UserData>(user);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    return throwError('Error');
  }
}
