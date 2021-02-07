import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShoppingListCreateRequestData, ShoppingListUpdateRequestData } from '../model/api/requests/shopping-list.request-data';
import { ShoppingListResponseData } from '../model/api/responses/shopping-list.response-data';
import { ShoppingList } from '../model/interfaces/shopping-list.interface';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private commonMethodsForHttpService: CommonMethodsForHttpService) { }

  createShoppingList(creationData: ShoppingListCreateRequestData): Observable<boolean> {
    const url = `${environment.url}/shopping-lists`;
    return this.commonMethodsForHttpService.createData(creationData, url);
  }

  getShoppingList(id: string): Observable<ShoppingList> {
    const url = `${environment.url}/shopping-lists/${id}`;
    return this.commonMethodsForHttpService.getSingleData<ShoppingListResponseData, ShoppingList>(url);
  }

  getAllShoppingLists(): Observable<ShoppingList[]> {
    const url = `${environment.url}/users/me/shopping-lists`;
    return this.commonMethodsForHttpService.getMultiData<ShoppingListResponseData, ShoppingList>(url);
  }

  updateShoppingList(
    updateData: ShoppingListUpdateRequestData,
    id: string
  ): Observable<boolean> {
    const url = `${environment.url}/shopping-lists/${id}`;
    return this.commonMethodsForHttpService.updataData(updateData, url);
  }

  deleteShoppingList(id: string): Observable<boolean> {
    const url = `${environment.url}/shopping-lists/${id}`;
    return this.commonMethodsForHttpService.deleteData(url);
  }
}
