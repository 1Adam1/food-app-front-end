import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProductOfferCreateRequestData, ProductOfferUpdateRequestData } from '../model/api/requests/product-offer.request-data';
import { ProductOfferResponseData } from '../model/api/responses/product-offer.response-data';
import { ProductOffer } from '../model/interfaces/product-offer.interface';
import { ObjectConverterService } from './object-converter.service';

@Injectable({
  providedIn: 'root'
})
export class ProductOfferService {

  constructor(private http: HttpClient, private converter: ObjectConverterService) { }

  createProductOffer(
    productOfferCreationData: ProductOfferCreateRequestData, 
    productId: string, 
    shopId: string
  ): Observable<boolean> {
    return this.http
      .post(`${environment.url}/product-offers?shopid=${shopId}&productId=${productId}`,
        productOfferCreationData
      )
      .pipe(
        catchError(this.handleError),
        mapTo(true)
      );
  }

  getProductOffer(productOfferId: string): Observable<ProductOffer> {
    return this.http
    .get(`${environment.url}/product-offers/${productOfferId}`)
    .pipe(
      catchError(this.handleError),
      map(result => this.processFetchedProductOffer(result as ProductOfferResponseData))
    );
  }

  getAllProductOffersForShop(shopId: string): Observable<ProductOffer[]> {
    return this.http
    .get(`${environment.url}/shops/${shopId}/offers`)
    .pipe(
      catchError(this.handleError),
      map(result => this.processFetchedProductOffers(result as ProductOfferResponseData[]))
    );
  }

  getAllProductOffersForProduct(productId: string): Observable<ProductOffer[]> {
    return this.http
    .get(`${environment.url}/products/${productId}/offers`)
    .pipe(
      catchError(this.handleError),
      map(result => this.processFetchedProductOffers(result as ProductOfferResponseData[]))
    );
  }

  updateProductOffer(productOfferUpdateData: ProductOfferUpdateRequestData, productOfferId: string): Observable<boolean> {
    return this.http
      .patch(`${environment.url}/product-offers/${productOfferId}`,
        productOfferUpdateData
      )
      .pipe(
        catchError(this.handleError),
        mapTo(true)
      );
  }

  deleteProductOffer(productOfferId: string): Observable<boolean> {
    return this.http.delete(`${environment.url}/product-offers/${productOfferId}`)
    .pipe(
      catchError(this.handleError),
      mapTo(true)
    );
  }

  private processFetchedProductOffers(data: ProductOfferResponseData[]): ProductOffer[] {
    const results = [];

    data.forEach(dataPart => {
      results.push(this.processFetchedProductOffer(dataPart));
    });
    return results;
  }

  private processFetchedProductOffer(data: ProductOfferResponseData): ProductOffer {
    return this.converter.convertResponseToObject<ProductOffer>(data);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    return throwError('Error');
  }
}
