import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<any> {
    return this.http
      .post(`${environment.url}/users`, 
        {
          login, 
          password
        }
      )
      .pipe();
  }
}
