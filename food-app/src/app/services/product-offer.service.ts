import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductOfferCreateRequestData, ProductOfferUpdateRequestData } from '../model/api/requests/product-offer.request-data';
import { ProductOfferResponseData } from '../model/api/responses/product-offer.response-data';
import { ProductOffer } from '../model/interfaces/product-offer.interface';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductOfferService {

  constructor(private commonMethodsForHttpService: CommonMethodsForHttpService) { }

  createProductOffer(
    creationData: ProductOfferCreateRequestData, 
    productId: string, 
    shopId: string
  ): Observable<boolean> {
    const url = `${environment.url}/product-offers?shopId=${shopId}&productId=${productId}`;
    return this.commonMethodsForHttpService.createData(creationData, url);
  }

  getProductOffer(id: string): Observable<ProductOffer> {
    const url = `${environment.url}/product-offers/${id}`;
    return this.commonMethodsForHttpService.getSingleData<ProductOfferResponseData, ProductOffer>(url);
  }

  getAllProductOffersForShop(id: string): Observable<ProductOffer[]> {
    const url = `${environment.url}/shops/${id}/offers`;
    return this.commonMethodsForHttpService.getMultiData<ProductOfferResponseData, ProductOffer>(url);
  }

  getAllProductOffersForProduct(id: string): Observable<ProductOffer[]> {
    const url = `${environment.url}/products/${id}/offers`;
    return this.commonMethodsForHttpService.getMultiData<ProductOfferResponseData, ProductOffer>(url);
  }

  updateProductOffer(updateData: ProductOfferUpdateRequestData, id: string): Observable<boolean> {
    const url = `${environment.url}/product-offers/${id}`;
    return this.commonMethodsForHttpService.updataData(updateData, url);
  }

  deleteProductOffer(id: string): Observable<boolean> {
    const url = `${environment.url}/product-offers/${id}`;
    return this.commonMethodsForHttpService.deleteData(url);
  }
}
