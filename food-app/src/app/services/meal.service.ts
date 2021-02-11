import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';
import { MealCreateRequestData, MealUpdateRequestData } from '../model/api/requests/meal.request-data';
import { MealResponseData } from '../model/api/responses/meal.response-data';
import { Meal } from '../model/interfaces/meal.interface';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private commonMethodsForHttpService: CommonMethodsForHttpService) { }

  createMeal(creationData: MealCreateRequestData): Observable<boolean> {
    const url = `${environment.url}/meals`;
    return this.commonMethodsForHttpService.createData(creationData, url);
  }

  getMeal(id: string): Observable<Meal> {
    const url = `${environment.url}/meals/${id}`;
    return this.commonMethodsForHttpService.getSingleData<MealResponseData, Meal>(url);
  }

  getAllMeals(): Observable<Meal[]> {
    const url = `${environment.url}/users/me/meals`;
    return this.commonMethodsForHttpService.getMultiData<MealResponseData, Meal>(url);
  }

  updateMeal(updateData: MealUpdateRequestData, mealId: string): Observable<boolean> {
    const url = `${environment.url}/meals/${mealId}`;
    return this.commonMethodsForHttpService.updataData(updateData, url);
  }

  deleteMeal(mealId: string): Observable<boolean> {
    const url = `${environment.url}/meals/${mealId}`;
    return this.commonMethodsForHttpService.deleteData(url);
  }
}
