import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map, mapTo, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ShopCreateRequestData, ShopUpdateRequestData } from '../model/api/requests/shop.request-data';
import { ShopResponseData } from '../model/api/responses/shop.responses-data';
import { Shop } from '../model/interfaces/shop.interface';
import { ObjectConverterService } from './object-converter.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient, private converter: ObjectConverterService) { }

  createShop(shopCreationData: ShopCreateRequestData): Observable<boolean> {
    return this.http
      .post(`${environment.url}/shops`,
        shopCreationData
      )
      .pipe(
        catchError(this.handleError),
        mapTo(true)
      );
  }
  
  getShop(shopId: string): Observable<Shop> {
    return this.http
    .get(`${environment.url}/shops/${shopId}`)
    .pipe(
      catchError(this.handleError),
      map(result => this.processFetchedShop(result as ShopResponseData))
    );
  }

  getAllShop(): Observable<Shop[]> {
    return this.http
    .get(`${environment.url}/users/me/shop`)
    .pipe(
      catchError(this.handleError),
      map(result => this.processFetchedShops(result as ShopResponseData[]))
    );
  }

  updateShop(shopUpdateData: ShopUpdateRequestData): Observable<boolean> {
    return this.http
      .patch(`${environment.url}/shops`,
        shopUpdateData
      )
      .pipe(
        catchError(this.handleError),
        mapTo(true)
      );
  }

  deleteShop(): Observable<boolean> {
    return this.http.delete(`${environment.url}/shops`)
    .pipe(
      catchError(this.handleError),
      mapTo(true)
    );
  }

  private processFetchedShops(data: ShopResponseData[]): Shop[] {
    const results = [];

    data.forEach(dataPart => {
      results.push(this.processFetchedShop(dataPart));
    });
    return results;
  }

  private processFetchedShop(data: ShopResponseData): Shop {
    return this.converter.convertResponseToObject<Shop>(data);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    return throwError('Error');
  }
}
