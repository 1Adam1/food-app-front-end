import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from 'src/app/model/interfaces/user-data.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { DataInfoComponentInputFormat } from '../../data-info/data-info.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  pageLoaded = false;
  user: UserData;
  data: DataInfoComponentInputFormat;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userService.getLogedUser().subscribe(result => {
      this.pageLoaded = true;
      this.user = result;
      this.data = this.prepareDataInfoComponentInputFormat('My user data');
    });
  }

  deleteUser() {
    this.pageLoaded = false;
    this.user = undefined;

    this.authenticationService.deleteLogedUser().subscribe();
  }

  private prepareDataInfoComponentInputFormat(header: string): DataInfoComponentInputFormat {
    const result: DataInfoComponentInputFormat = {
      header,
      values: [
        {
          key: 'Login',
          value: this.user.login
        },
        {
          key: 'Name',
          value: this.user.name
        },
        {
          key: 'Surname',
          value: this.user.surname
        },
        {
          key: 'Description',
          value: this.user.description
        }
      ]
    };

    return result;
  }

  goToUserEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  logoutAll() {
    this.authenticationService.logoutAll().subscribe();
  }
}
