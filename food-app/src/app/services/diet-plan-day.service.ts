import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DietPlanDayCreateRequestData, DietPlanDayUpdateRequestData } from '../model/api/requests/diet-plan-day.request-data';
import { DietPlanDayResponseData } from '../model/api/responses/diet-plan-day.response-data';
import { DietPlanDay } from '../model/interfaces/diet-plan-day.interface';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';

@Injectable({
  providedIn: 'root'
})
export class DietPlanDayService {

  constructor(private commonMethodsForHttpService: CommonMethodsForHttpService) { }

  createDay(
    creationData: DietPlanDayCreateRequestData,
    personId: string,
    profileId: string
  ): Observable<boolean> {
    const url = `${environment.url}/persons/${personId}/profiles/${profileId}/diet-plan-days`;
    return this.commonMethodsForHttpService.createData(creationData, url);
  }

  getDay(
    id: string,
    personId: string,
    profileId: string
  ): Observable<DietPlanDay> {
    const url = `${environment.url}/persons/${personId}/profiles/${profileId}/diet-plan-days/${id}`;
    return this.commonMethodsForHttpService.getSingleData<DietPlanDayResponseData, DietPlanDay>(url);
  }

  getManyDayDays(
    dateFrom: Date, 
    dateTo: Date,
    personId: string,
    profileId: string
  ): Observable<DietPlanDay[]> {
    const url = `${environment.url}/persons/${personId}/profiles/${profileId}/diet-plan-days`;
    const params = `?dateFrom=${dateFrom.toString()}&dateTo=${dateTo.toDateString()}`;
    return this.commonMethodsForHttpService.getMultiData<DietPlanDayResponseData, DietPlanDay>(url + params);
  }

  updateDay(
    updateData: DietPlanDayUpdateRequestData, 
    id: string,
    personId: string,
    profileId: string
  ): Observable<boolean> {
    const url = `${environment.url}/persons/${personId}/profiles/${profileId}/diet-plan-days/${id}`;
    return this.commonMethodsForHttpService.updataData(updateData, url);
  }

  deleteDay(
    id: string,
    personId: string,
    profileId: string
  ): Observable<boolean> {
    const url = `${environment.url}/persons/${personId}/profiles/${profileId}/diet-plan-days/${id}`;
    return this.commonMethodsForHttpService.deleteData(url);
  }
}
