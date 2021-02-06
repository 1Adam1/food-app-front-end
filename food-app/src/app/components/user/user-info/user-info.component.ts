import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/model/interfaces/user-data.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {
  pageLoaded = false;
  user: UserData;

  constructor(private authenticationService: AuthenticationService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLogedUser().subscribe(result => {
      this.pageLoaded = true;
      this.user = result;
    });
  }

  deleteUser() {
    this.pageLoaded = false;
    this.user = undefined;

    this.authenticationService.deleteLogedUser().subscribe();
  }
}