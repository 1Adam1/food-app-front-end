import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, mapTo, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserUpdateRequestData } from '../model/api/requests/user.request-data';
import { UserResponseData } from '../model/api/responses/user.response-data';
import { UserData } from '../model/interfaces/user-data.interface';
import { AuthenticationService } from './authentication.service';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private commonMethodsForHttpService: CommonMethodsForHttpService, private authenticationService: AuthenticationService) { }
  
  getLogedUser(): Observable<UserData> {
    return this.http
    .get(`${environment.url}/users/me`)
    .pipe(
      catchError(this.commonMethodsForHttpService.handleError),
      map(result => 
        this.commonMethodsForHttpService
          .processFetchedSingleData<UserResponseData, UserData>(result as UserResponseData))
    );
  }

  updateLogedUser(userUpdateData: UserUpdateRequestData): Observable<boolean> {
    return this.http
      .patch(`${environment.url}/users/me`,
        userUpdateData
      )
      .pipe(
        catchError(this.commonMethodsForHttpService.handleError),
        mapTo(true)
      );
  }
}
