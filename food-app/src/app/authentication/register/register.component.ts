import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { UserCreateRequestData } from 'src/app/model/api/requests/user.request-data';
import { UserData } from 'src/app/model/interfaces/user-data.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ObjectConverterService } from 'src/app/services/object-converter.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private authenticationService: AuthenticationService, private converter: ObjectConverterService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'confirmedPassword': new FormControl(null, [Validators.required, Validators.minLength(6), this.matchPassword.bind(this)]),
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'description': new FormControl(null),
    });
  }

  private matchPassword(control: FormControl): {[key: string]: boolean} {
    const passwordValue = this.form?.get('password').value;
    const confirmedPasswordValue = control.value;

    if (passwordValue !== confirmedPasswordValue) {
      return {
        'passwordsDontMatch': true 
      };
    }

    return null;
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const fields = [
      'login',
      'password',
      'name',
      'surname',
      'description'
    ];
    const data = this.converter.convertFormFieldsToObject<UserCreateRequestData>(this.form, fields);

    this.authenticationService.signup(data).subscribe();
  }
}
