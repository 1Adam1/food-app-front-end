import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mapTo, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Token } from '../model/interfaces/token';
import { UserData } from '../model/interfaces/user-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly tokenFieldName = 'AUTHENTICATION_TOKEN';
  private user: UserData = undefined;

  constructor(private http: HttpClient, private router: Router) { }

  login(login: string, password: string): Observable<boolean> {
    return this.http
      .post(`${environment.url}/users/login`, 
        {
          login, 
          password
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(result => this.performLogin(result)),
        mapTo(true)
      );
  }

  signup(userCreationData): Observable<any> {
    return this.http
      .post('/api/users',
        userCreationData
      )
      .pipe(
        catchError(this.handleError),
        tap(result => this.performSignup(result)),
        mapTo(true)
      );
  }

  logout(): Observable<any> {
    return this.http
      .post('/api/users/logout', {})
      .pipe(
        catchError(this.handleError),
        tap(() => this.performLogout()),
        mapTo(true)
      );
  }

  logoutAll(): Observable<any> {
    return this.http
      .post('/api/users/logoutAll', {})
      .pipe(
        catchError(this.handleError),
        tap(() => this.performLogoutAll()),
        mapTo(true)
      );
  }

  getLogedUser(): UserData {
    return this.user;
  }

  private performLogin(resultData) {
    this.user = resultData.user;
    this.storeAuthenticationToken(resultData.token);
    this.router.navigate(['/home']);
  }

  private performSignup(resultData) {

  }

  private performLogout() {
    this.removeAuthenticationToken();
    this.router.navigate(['/login']);
  }

  private performLogoutAll() {

  }

  private handleError(errorResponse: HttpErrorResponse) {
    return throwError('Error');
  }

  private storeAuthenticationToken(token: Token) {
    localStorage.setItem(this.tokenFieldName, token.token);
  }

  private getAuthenticationToken(): Token {
    const value = localStorage.getItem(this.tokenFieldName);
    
    return {token: value};
  }

  private removeAuthenticationToken() {
    localStorage.removeItem(this.tokenFieldName);
  }
}
