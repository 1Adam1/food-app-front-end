import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const {login, password} = form.value;
    
    this.authenticationService.login(login, password).subscribe(result => {
      form.reset();
    }, error => {
      window.alert('Wrong login or password');
    }
    );
  }

  goToRegistrationPage() {
    this.router.navigate(['/register']);
  }
}
