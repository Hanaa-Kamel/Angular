import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { OrderDetail } from 'src/app/productcomponent/viewmodel/order-detail';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  constructor(private httpClient: HttpClient) { }

  getAllOrderDetails(): Observable <OrderDetail[]> {
    return (this.httpClient.get <OrderDetail[]>(`${environment.API_URL}/OrderDetail/GetOrderDetails`));
   }

  
  getOrderDetailbyID(Ordid:number): Observable <OrderDetail> {
    return (this.httpClient.get <OrderDetail>(`${environment.API_URL}/OrderDetail/GetOrderDetail/${Ordid}`));
   }
 
   insertOrderDetail(neword: OrderDetail): Observable <any> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': ' */*'
      // ,'Authorization': 'my-auth-token'
        })};

    return this.httpClient
    .post <any>(`${environment.API_URL}/OrderDetail/PostOrderDetail`, neword, httpOptions);
   }
   DeleteOrderDetail(id:number): Observable <boolean> {
    return (this.httpClient.delete <boolean>(`${environment.API_URL}/OrderDetail/DeleteOrderDetail/${id}`));
   }
 
}
