import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ObjectConverterService {

  constructor() { }

  convertFormFieldsToObject<T>(form: FormGroup, fieldsNames: string[]): T {
    const result = {};

    fieldsNames.forEach(name => {
      const value = form.get(name)?.value;

      result[name] = value;
    });

    return result as T;
  }

  convertResponseToObject<T>(response: Object): T {
    const result = {};
    const keys = Object.keys(response);

    keys.forEach(key => {
      result[key] = response[key];
    });

    return result as T;
  }
}
