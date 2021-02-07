import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PersonalProfileCreateRequestData, PersonalProfileUpdateRequestData } from '../model/api/requests/personal-profile.request-data';
import { PersonalProfileResponseData } from '../model/api/responses/personal-profile.response-data';
import { PersonalProfile } from '../model/interfaces/personal-profile.interface';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalProfileService {

  constructor(private commonMethodsForHttpService: CommonMethodsForHttpService) { }

  createPersonalProfile(creationData: PersonalProfileCreateRequestData, personId): Observable<boolean> {
    const url = `${environment.url}/persons/${personId}/profiles`;
    return this.commonMethodsForHttpService.createData(creationData, url);
  }
  
  getPersonalProfile(profileId: string, personId: string): Observable<PersonalProfile> {
    const url = `${environment.url}/persons/${personId}/profiles/${profileId}`;
    return this.commonMethodsForHttpService.getSingleData<PersonalProfileResponseData, PersonalProfile>(url);
  }

  getAllPersonalProfiles(personId: string): Observable<PersonalProfile[]> {
    const url = `${environment.url}/persons/${personId}/profiles`;
    return this.commonMethodsForHttpService.getMultiData<PersonalProfileResponseData, PersonalProfile>(url);
  }

  updatePersonalProfile(updateData: PersonalProfileUpdateRequestData, profileId: string, personId: string): Observable<boolean> {
    const url = `${environment.url}/persons/${personId}/profiles/${profileId}`;
    return this.commonMethodsForHttpService.updataData(updateData, url);
  }

  deletePersonalProfile(profileId: string, personId: string): Observable<boolean> {
    const url = `${environment.url}/persons/${personId}/profiles/${profileId}`;
    return this.commonMethodsForHttpService.deleteData(url);
  }
}
