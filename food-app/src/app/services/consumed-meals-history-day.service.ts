import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConsumedMealsHistoryDayCreateRequestData, ConsumedMealsHistoryDayUpdateRequestData } from '../model/api/requests/consumed-meals-history-day.request-data';
import { ConsumedMealsHistoryDayResponseData } from '../model/api/responses/consumed-meals-history-day.response-data';
import { ConsumedMealsHistoryDay } from '../model/interfaces/consumed-meals-history-day.interface';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumedMealsHistoryDayService {

  constructor(private commonMethodsForHttpService: CommonMethodsForHttpService) { }

  createDay(
    creationData: ConsumedMealsHistoryDayCreateRequestData,
    personId: string,
    profileId: string
  ): Observable<boolean> {
    const url = `${environment.url}/persons/${personId}/profiles/${profileId}/consumed-meals-history-days`;
    return this.commonMethodsForHttpService.createData(creationData, url);
  }

  getDay(
    id: string,
    personId: string,
    profileId: string
  ): Observable<ConsumedMealsHistoryDay> {
    const url = `${environment.url}/persons/${personId}/profiles/${profileId}/consumed-meals-history-days/${id}`;
    return this.commonMethodsForHttpService.getSingleData<ConsumedMealsHistoryDayResponseData, ConsumedMealsHistoryDay>(url);
  }

  getManyDayDays(
    dateFrom: Date, 
    dateTo: Date,
    personId: string,
    profileId: string
  ): Observable<ConsumedMealsHistoryDay[]> {
    const url = `${environment.url}/persons/${personId}/profiles/${profileId}/consumed-meals-history-days`;
    const params = `?dateFrom=${dateFrom.toString()}&dateTo=${dateTo.toDateString()}`;
    return this.commonMethodsForHttpService.getMultiData<ConsumedMealsHistoryDayResponseData, ConsumedMealsHistoryDay>(url + params);
  }

  updateDay(
    updateData: ConsumedMealsHistoryDayUpdateRequestData, 
    id: string,
    personId: string,
    profileId: string
  ): Observable<boolean> {
    const url = `${environment.url}/persons/${personId}/profiles/${profileId}/consumed-meals-history-days/${id}`;
    return this.commonMethodsForHttpService.updataData(updateData, url);
  }

  deleteDay(
    id: string,
    personId: string,
    profileId: string
  ): Observable<boolean> {
    const url = `${environment.url}/persons/${personId}/profiles/${profileId}/consumed-meals-history-days/${id}`;
    return this.commonMethodsForHttpService.deleteData(url);
  }
}
