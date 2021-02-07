import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map, mapTo, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ShopCreateRequestData, ShopUpdateRequestData } from '../model/api/requests/shop.request-data';
import { ShopResponseData } from '../model/api/responses/shop.responses-data';
import { Shop } from '../model/interfaces/shop.interface';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient, private commonMethodsForHttpService: CommonMethodsForHttpService) { }

  createShop(shopCreationData: ShopCreateRequestData): Observable<boolean> {
    return this.http
      .post(`${environment.url}/shops`,
        shopCreationData
      )
      .pipe(
        catchError(this.commonMethodsForHttpService.handleError),
        mapTo(true)
      );
  }
  
  getShop(shopId: string): Observable<Shop> {
    return this.http
    .get(`${environment.url}/shops/${shopId}`)
    .pipe(
      catchError(this.commonMethodsForHttpService.handleError),
      map(result => 
        this.commonMethodsForHttpService
          .processFetchedSingleData<ShopResponseData, Shop>(result as ShopResponseData))
    );
  }

  getAllShops(): Observable<Shop[]> {
    return this.http
    .get(`${environment.url}/users/me/shops`)
    .pipe(
      catchError(this.commonMethodsForHttpService.handleError),
      map(result => 
        this.commonMethodsForHttpService
        .processFetchedMultiData<ShopResponseData, Shop>(result as ShopResponseData[]))
    );
  }

  updateShop(shopUpdateData: ShopUpdateRequestData, shopId: string): Observable<boolean> {
    return this.http
      .patch(`${environment.url}/shops/${shopId}`,
        shopUpdateData
      )
      .pipe(
        catchError(this.commonMethodsForHttpService.handleError),
        mapTo(true)
      );
  }

  deleteShop(shopId: string): Observable<boolean> {
    return this.http.delete(`${environment.url}/shops/${shopId}`)
    .pipe(
      catchError(this.commonMethodsForHttpService.handleError),
      mapTo(true)
    );
  }
}
