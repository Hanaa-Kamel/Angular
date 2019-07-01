import { Injectable } from '@angular/core';
import { Order } from 'src/app/productcomponent/viewmodel/order';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderlist:Order[];
  constructor(private httpClient: HttpClient) {
    this.orderlist=[];
   }
   getAllOrders(): Observable <Order[]> {
    return (this.httpClient.get <Order[]>(`${environment.API_URL}/Order/Get`));
   }
    GetOneOrderByID(ordid:number):Observable <Order>
   {
    return (this.httpClient.get <Order>(`${environment.API_URL}/Order/Get/${ordid}`));
   }
    insertOrder(newOrd: Order): Observable <any> {
     const httpOptions = {headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Accept': ' */*'
       // ,'Authorization': 'my-auth-token'
         })};

     return this.httpClient
     .post <any>(`${environment.API_URL}/Order/post`, newOrd, httpOptions);
    }
    DeleteOrder(ordID:number)
    {
      return (this.httpClient.delete <boolean>(`${environment.API_URL}/Order/Delete/${ordID}`));
    }
}
