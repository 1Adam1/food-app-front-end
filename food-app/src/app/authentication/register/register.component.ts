import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor() { }

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
    console.log(this.form);
  }

}
