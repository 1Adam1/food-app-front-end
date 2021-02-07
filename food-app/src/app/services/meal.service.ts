import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map, mapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';
import { MealCreateRequestData, MealUpdateRequestData } from '../model/api/requests/meal.request-data';
import { MealResponseData } from '../model/api/responses/meal.response-data';
import { Meal } from '../model/interfaces/meal.interface';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient, private commonMethodsForHttpService: CommonMethodsForHttpService) { }

  createMeal(mealCreationData: MealCreateRequestData): Observable<boolean> {
    return this.http
      .post(`${environment.url}/meals`,
        mealCreationData
      )
      .pipe(
        catchError(this.commonMethodsForHttpService.handleError),
        mapTo(true)
      );
  }

  getMeal(mealId: string): Observable<Meal> {
    return this.http
    .get<MealResponseData>(`${environment.url}/meals/${mealId}`)
    .pipe(
      catchError(this.commonMethodsForHttpService.handleError),
      map(result => 
        this.commonMethodsForHttpService
          .processFetchedSingleData<MealResponseData, Meal>(result))
    );
  }

  getAllMeals(): Observable<Meal[]> {
    return this.http
    .get<MealResponseData[]>(`${environment.url}/meals`)
    .pipe(
      catchError(this.commonMethodsForHttpService.handleError),
      map(result => 
        this.commonMethodsForHttpService
          .processFetchedMultiData<MealResponseData, Meal>(result))
    );
  }
  updateMeal(mealUpdateData: MealUpdateRequestData, mealId: string): Observable<boolean> {
    return this.http
      .patch(`${environment.url}/meals/${mealId}`,
        mealUpdateData
      )
      .pipe(
        catchError(this.commonMethodsForHttpService.handleError),
        mapTo(true)
      );
  }

  deleteMeal(mealId: string): Observable<boolean> {
    return this.http.delete(`${environment.url}/meals/${mealId}`)
    .pipe(
      catchError(this.commonMethodsForHttpService.handleError),
      mapTo(true)
    );
  }
}
