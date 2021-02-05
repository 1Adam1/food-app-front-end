import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValuesToObjectConverterService {

  constructor() { }

  convert<T>(form: FormGroup, fieldsNames: string[]): T {
    const result = {};

    fieldsNames.forEach(name => {
      const value = form.get(name)?.value;

      result[name] = value;
    });

    return result as T;
  }
}
