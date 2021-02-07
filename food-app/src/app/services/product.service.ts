import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map, mapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';
import { ProductCreateRequestData, ProductUpdateRequestData } from '../model/api/requests/product.request-data';
import { ProductResponseData } from '../model/api/responses/product.response-data';
import { Product } from '../model/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private commonMethodsForHttpService: CommonMethodsForHttpService) { }

  createProduct(productCreationData: ProductCreateRequestData): Observable<boolean> {
    return this.http
      .post(`${environment.url}/products`,
        productCreationData
      )
      .pipe(
        catchError(this.commonMethodsForHttpService.handleError),
        mapTo(true)
      );
  }
  
  getProduct(productId: string): Observable<Product> {
    return this.http
    .get<ProductResponseData>(`${environment.url}/products/${productId}`)
    .pipe(
      catchError(this.commonMethodsForHttpService.handleError),
      map(result => 
        this.commonMethodsForHttpService
          .processFetchedSingleData<ProductResponseData, Product>(result))
    );
  }

  getAllProducts(): Observable<Product[]> {
    return this.http
    .get<ProductResponseData[]>(`${environment.url}/users/me/products`)
    .pipe(
      catchError(this.commonMethodsForHttpService.handleError),
      map(result => 
        this.commonMethodsForHttpService
        .processFetchedMultiData<ProductResponseData, Product>(result))
    );
  }

  updateProduct(productUpdateData: ProductUpdateRequestData, productId: string): Observable<boolean> {
    return this.http
      .patch(`${environment.url}/products/${productId}`,
        productUpdateData
      )
      .pipe(
        catchError(this.commonMethodsForHttpService.handleError),
        mapTo(true)
      );
  }

  deleteProduct(productId: string): Observable<boolean> {
    return this.http.delete(`${environment.url}/products/${productId}`)
    .pipe(
      catchError(this.commonMethodsForHttpService.handleError),
      mapTo(true)
    );
  }
}
