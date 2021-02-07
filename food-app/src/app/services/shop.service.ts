import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShopCreateRequestData, ShopUpdateRequestData } from '../model/api/requests/shop.request-data';
import { ShopResponseData } from '../model/api/responses/shop.responses-data';
import { Shop } from '../model/interfaces/shop.interface';
import { CommonMethodsForHttpService } from './common-methods-for-http.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private commonMethodsForHttpService: CommonMethodsForHttpService) { }

  createShop(creationData: ShopCreateRequestData): Observable<boolean> {
    const url = `${environment.url}/shops`;
    return this.commonMethodsForHttpService.createData(creationData, url);
  }
  
  getShop(id: string): Observable<Shop> {
    const url = `${environment.url}/shops/${id}`;
    return this.commonMethodsForHttpService.getSingleData<ShopResponseData, Shop>(url);
  }

  getAllShops(): Observable<Shop[]> {
    const url = `${environment.url}/users/me/shops`;
    return this.commonMethodsForHttpService.getMultiData<ShopResponseData, Shop>(url);
  }

  updateShop(updateData: ShopUpdateRequestData, id: string): Observable<boolean> {
    const url = `${environment.url}/shops/${id}`;
    return this.commonMethodsForHttpService.updataData(updateData, url);
  }

  deleteShop(id: string): Observable<boolean> {
    const url = `${environment.url}/shops/${id}`;
    return this.commonMethodsForHttpService.deleteData(url);
  }
}
