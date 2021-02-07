import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (this.authenticationService.isUserLoged()) {
      const token = this.authenticationService.getAuthenticationToken();

      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token.token}`
        }
      });
    }

    return next.handle(request).pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error) {
    if (error instanceof HttpErrorResponse && error.status === 401) {
      this.router.navigate(['/login']);
    } else {
      throwError(error);
    }

    return of<any>();
  }
}
