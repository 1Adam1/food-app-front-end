import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';
import { ProductCreateRequestData, ProductUpdateRequestData } from '../model/api/requests/product.request-data';
import { ProductResponseData } from '../model/api/responses/product.response-data';
import { Product } from '../model/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private commonMethodsForHttpService: CommonMethodsForHttpService) { }

  createProduct(creationData: ProductCreateRequestData): Observable<boolean> {
    const url = `${environment.url}/products`;
    return this.commonMethodsForHttpService.createData(creationData, url);
  }
  
  getProduct(id: string): Observable<Product> {
    const url = `${environment.url}/products/${id}`;
    return this.commonMethodsForHttpService.getSingleData<ProductResponseData, Product>(url);
  }

  getAllProducts(): Observable<Product[]> {
    const url = `${environment.url}/users/me/products`;
    return this.commonMethodsForHttpService.getMultiData<ProductResponseData, Product>(url);
  }

  updateProduct(updateData: ProductUpdateRequestData, id: string): Observable<boolean> {
    const url = `${environment.url}/products/${id}`;
    return this.commonMethodsForHttpService.updataData(updateData, url);
  }

  deleteProduct(id: string): Observable<boolean> {
    const url = `${environment.url}/products/${id}`;
    return this.commonMethodsForHttpService.deleteData(url);
  }
}
