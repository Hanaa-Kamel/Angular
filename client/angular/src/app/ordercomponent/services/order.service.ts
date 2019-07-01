import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from 'src/app/productcomponent/viewmodel/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getAllOrders(): Observable <Order[]> {
    return (this.httpClient.get <Order[]>(`${environment.API_URL}/Order/GetOrders`));
   }

  //  getOrderid(ordid:number): Observable <Product[]> {
  //   return (this.httpClient.get <Product[]>(`${environment.API_URL}/Product/GetProductsbycatID/${catid}`));
  //  }
  getOrderbyID(Ordid:number): Observable <Order> {
    return (this.httpClient.get <Order>(`${environment.API_URL}/Order/GetOrder/${Ordid}`));
   }
  //  getProductbyid(id:number): Observable <Product> {
  //   return (this.httpClient.get <Product>(`${environment.API_URL}/Product/GetProductbyID/${id}`));
  //  }
   insertOrder(neword: Order): Observable <any> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': ' */*'
      // ,'Authorization': 'my-auth-token'
        })};

    return this.httpClient
    .post <any>(`${environment.API_URL}/Order/PostOrder`, neword, httpOptions);
   }
   DeleteOrder(id:number): Observable <boolean> {
    return (this.httpClient.delete <boolean>(`${environment.API_URL}/Order/DeleteOrder/${id}`));
   }
  // GetallProductByCatID(catid:number):Product[]//
  // {
  //   let prdlistofcat:Product[]=[];
  //  this.productlist.filter(f=>{
  //    if(f.CatID==catid)
  //    prdlistofcat.push(f);
  //  });
  //  return prdlistofcat;getAllOrders
  // }

  /////////////////////////////////
 
}
