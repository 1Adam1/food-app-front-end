import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserUpdateRequestData } from 'src/app/model/api/requests/user.request-data';
import { UserData } from 'src/app/model/interfaces/user-data.interface';
import { ObjectConverterService } from 'src/app/services/object-converter.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.sass']
})
export class UserEditComponent implements OnInit {
  user: UserData;
  form: FormGroup;
  pageLoaded = false;

  constructor(private userService: UserService, private converter: ObjectConverterService, private router: Router) { }

  ngOnInit() {
    this.userService.getLogedUser().subscribe(result => {
      this.user = result;
      this.createForm();
      this.pageLoaded = true;
    });
  }

  private createForm() {
    this.form = new FormGroup({
      'login': new FormControl({value: this.user.login, disabled: true}),
      'name': new FormControl(this.user.name, Validators.required),
      'surname': new FormControl(this.user.surname, Validators.required),
      'description': new FormControl(this.user.description),
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const fields = [
      'name',
      'surname',
      'description'
    ];
    const data = this.converter.convertFormFieldsToObject<UserUpdateRequestData>(this.form, fields);

    this.userService.updateLogedUser(data).subscribe(result => {
      this.router.navigate(['/me']);
    });
  }
}
