import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetail } from 'src/app/productcomponent/viewmodel/order-detail';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private httpClient: HttpClient) { 

  }
  getAllOrderDetails(): Observable <OrderDetail[]> {
    return (this.httpClient.get <OrderDetail[]>(`${environment.API_URL}/OrderDetail/GetOrderDetails`));
   }
    GetOneOrderDetailByID(ordid:number):Observable <OrderDetail>
   {
    return (this.httpClient.get <OrderDetail>(`${environment.API_URL}/OrderDetail/GetOrderDetail/${ordid}`));
   }
   getAllOrderDetailsbyorderid(ordID:number): Observable <OrderDetail[]> {
    return (this.httpClient.get <OrderDetail[]>(`${environment.API_URL}/OrderDetail/GetOrderDetailsbyorderid/${ordID}`));
   }
   getAllOrderDetailsbyproductid(prdid:number): Observable <OrderDetail[]> {
    return (this.httpClient.get <OrderDetail[]>(`${environment.API_URL}/OrderDetail/GetOrderDetailsbyproductid/${prdid}`));
   }
}
