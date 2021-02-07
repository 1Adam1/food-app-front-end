import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authenticated-user-app',
  templateUrl: './authenticated-user-app.component.html',
  styleUrls: ['./authenticated-user-app.component.sass']
})
export class AuthenticatedUserAppComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout().subscribe();
  }

  logoutAll() {
    this.authenticationService.logoutAll().subscribe();
  }

}
