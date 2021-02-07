import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  
  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }
  
  canActivate() {
    const userIsLoged = this.authenticationService.isUserLoged();

    if (!userIsLoged) {
      return this.router.createUrlTree(['/login']);
    }

    return true;
  }
}
