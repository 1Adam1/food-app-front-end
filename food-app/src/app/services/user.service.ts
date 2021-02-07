import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserUpdateRequestData } from '../model/api/requests/user.request-data';
import { UserResponseData } from '../model/api/responses/user.response-data';
import { UserData } from '../model/interfaces/user-data.interface';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private commonMethodsForHttpService: CommonMethodsForHttpService) { }
  
  getLogedUser(): Observable<UserData> {
    const url = `${environment.url}/users/me`;
    return this.commonMethodsForHttpService.getSingleData<UserResponseData, UserData>(url);
  }

  updateLogedUser(updateData: UserUpdateRequestData): Observable<boolean> {
    const url = `${environment.url}/users/me`;
    return this.commonMethodsForHttpService.updataData(updateData, url);
  }
}
