import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from 'src/app/model/interfaces/user-data.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent implements OnInit {
  menuExpanded = false;
  user: UserData;

  constructor(
    private userService: UserService, 
    private authenticationService: AuthenticationService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userService.getLogedUser().subscribe(user => {
      this.user = user;
    });
  }

  onMenuExpandButtonClick() {
    this.menuExpanded = !this.menuExpanded;
  }

  onShowUserInfoClick() {
    this.menuExpanded = false;
    this.router.navigate(['me'], {relativeTo: this.route});
  }

  onLogoutClick() {
    this.menuExpanded = false;
    this.authenticationService.logout().subscribe();
  }

}
