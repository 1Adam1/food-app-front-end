import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserUpdateRequestData } from '../model/api/requests/user.request-data';
import { UserResponseData } from '../model/api/responses/user.response-data';
import { UserData } from '../model/interfaces/user-data.interface';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private commonMethodsForHttpService: CommonMethodsForHttpService, private http: HttpClient, private router: Router) { }
  
  getLogedUser(): Observable<UserData> {
    const url = `${environment.url}/users/me`;
    return this.http
      .get<UserResponseData>(url)
      .pipe(
        catchError(this.handleError),
        map(result => result.user)
      );
  }

  updateLogedUser(updateData: UserUpdateRequestData): Observable<boolean> {
    const url = `${environment.url}/users/me`;
    return this.commonMethodsForHttpService.updataData(updateData, url);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse instanceof HttpErrorResponse && errorResponse.status === 401) {
      this.router.navigate(['/login']);
    }
    return throwError('Error');
  }
}
