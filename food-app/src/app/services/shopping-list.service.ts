import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map, mapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ShopCreateRequestData, ShopUpdateRequestData } from '../model/api/requests/shop.request-data';
import { ShoppingListCreateRequestData, ShoppingListUpdateRequestData } from '../model/api/requests/shopping-list.request-data';
import { ShopResponseData } from '../model/api/responses/shop.responses-data';
import { ShoppingListResponseData } from '../model/api/responses/shopping-list.response-data';
import { Shop } from '../model/interfaces/shop.interface';
import { ShoppingList } from '../model/interfaces/shopping-list.interface';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private http: HttpClient, private commonMethodsForHttpService: CommonMethodsForHttpService) { }

  createShoppingList(shoppingListCreationData: ShoppingListCreateRequestData): Observable<boolean> {
    return this.http
      .post(`${environment.url}/shopping-lists`,
        shoppingListCreationData
      )
      .pipe(
        catchError(this.commonMethodsForHttpService.handleError),
        mapTo(true)
      );
  }

  getShoppingList(shoppingListId: string): Observable<ShoppingList> {
    return this.http
      .get<ShoppingListResponseData>(`${environment.url}/shopping-lists/${shoppingListId}`)
      .pipe(
        catchError(this.commonMethodsForHttpService.handleError),
        map(result =>
          this.commonMethodsForHttpService
            .processFetchedSingleData<ShoppingListResponseData, ShoppingList>(result))
      );
  }

  getAllShoppingLists(): Observable<ShoppingList[]> {
    return this.http
      .get<ShoppingListResponseData[]>(`${environment.url}/users/me/shopping-lists`)
      .pipe(
        catchError(this.commonMethodsForHttpService.handleError),
        map(result =>
          this.commonMethodsForHttpService
            .processFetchedMultiData<ShoppingListResponseData, ShoppingList>(result))
      );
  }

  updateShoppingList(
    shoppingListUpdateData: ShoppingListUpdateRequestData,
    shoppingListId: string
  ): Observable<boolean> {
    return this.http
      .patch(`${environment.url}/shopping-lists/${shoppingListId}`,
        shoppingListUpdateData
      )
      .pipe(
        catchError(this.commonMethodsForHttpService.handleError),
        mapTo(true)
      );
  }

  deleteShoppingList(shoppingListId: string): Observable<boolean> {
    return this.http.delete(`${environment.url}/shopping-lists/${shoppingListId}`)
      .pipe(
        catchError(this.commonMethodsForHttpService.handleError),
        mapTo(true)
      );
  }
}
