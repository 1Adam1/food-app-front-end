import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mapTo, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { UserCreateRequestData } from '../model/api/requests/user.request-date';
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

  signup(userCreationData: UserCreateRequestData): Observable<boolean> {
    return this.http
      .post(`${environment.url}/users`,
        userCreationData
      )
      .pipe(
        catchError(this.handleError),
        tap(result => this.performSignup(result)),
        mapTo(true)
      );
  }

  logout(): Observable<boolean> {
    return this.http
      .post(`${environment.url}/users/logout`, {})
      .pipe(
        catchError(this.handleError),
        tap(() => this.performLogout()),
        mapTo(true)
      );
  }

  logoutAll(): Observable<boolean> {
    return this.http
      .post(`${environment.url}/users/logoutAll`, {})
      .pipe(
        catchError(this.handleError),
        tap(() => this.performLogoutAll()),
        mapTo(true)
      );
  }

  isUserLoged(): boolean {
    return !!this.getAuthenticationToken();
  }

  getLogedUser(): UserData {
    return this.user;
  }
  
  getAuthenticationToken(): Token {
    const value = localStorage.getItem(this.tokenFieldName);
    
    return value ? {token: value} : undefined;
  }

  private performLogin(resultData) {
    this.handleAuthentication(resultData);
  }

  private performSignup(resultData) {
    this.handleAuthentication(resultData);
  }

  private handleAuthentication(resultData) {
    this.user = resultData.user;
    this.storeAuthenticationToken(resultData.token);
    this.router.navigate(['/home']);
  }

  private performLogout() {
    this.removeAuthenticationToken();
    this.router.navigate(['/login']);
  }

  private performLogoutAll() {
    this.performLogout();
  }

  private handleError(errorResponse: HttpErrorResponse) {
    return throwError('Error');
  }

  private storeAuthenticationToken(token: Token) {
    localStorage.setItem(this.tokenFieldName, token.token);
  }

  private removeAuthenticationToken() {
    localStorage.removeItem(this.tokenFieldName);
  }
}
