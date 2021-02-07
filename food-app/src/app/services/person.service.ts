import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PersonCreateRequestData, PersonUpdateRequestData } from '../model/api/requests/person.request-data';
import { PersonResponseData } from '../model/api/responses/person.response-data';
import { Person } from '../model/interfaces/person.interface';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private commonMethodsForHttpService: CommonMethodsForHttpService) { }

  createPerson(creationData: PersonCreateRequestData): Observable<boolean> {
    const url = `${environment.url}/persons`;
    return this.commonMethodsForHttpService.createData(creationData, url);
  }
  
  getPerson(id: string): Observable<Person> {
    const url = `${environment.url}/persons/${id}`;
    return this.commonMethodsForHttpService.getSingleData<PersonResponseData, Person>(url);
  }

  getAllPersons(): Observable<Person[]> {
    const url = `${environment.url}/users/me/persons`;
    return this.commonMethodsForHttpService.getMultiData<PersonResponseData, Person>(url);
  }

  updatePerson(updateData: PersonUpdateRequestData, id: string): Observable<boolean> {
    const url = `${environment.url}/persons/${id}`;
    return this.commonMethodsForHttpService.updataData(updateData, url);
  }

  deletePerson(id: string): Observable<boolean> {
    const url = `${environment.url}/persons/${id}`;
    return this.commonMethodsForHttpService.deleteData(url);
  }
}
