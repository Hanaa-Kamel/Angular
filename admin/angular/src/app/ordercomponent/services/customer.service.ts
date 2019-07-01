import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/productcomponent/viewmodel/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {

   }
   getAllCustomers(): Observable <Customer[]> {
    return (this.httpClient.get <Customer[]>(`${environment.API_URL}/Customer/GetCustomers`));
   }
    GetOneCustomerByID(custid:number):Observable <Customer>
   {
    return (this.httpClient.get <Customer>(`${environment.API_URL}/Customer/GetCustomer/${custid}`));
   }
    insercustomer(newCust: Customer): Observable <any> {
     const httpOptions = {headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Accept': ' */*'
       // ,'Authorization': 'my-auth-token'
         })};

     return this.httpClient
     .post <any>(`${environment.API_URL}/Customer/PostCustomer`, newCust, httpOptions);
    }
    Deletecustomer(custID:number)
    {
      return (this.httpClient.delete <boolean>(`${environment.API_URL}/Customer/DeleteCustomer/${custID}`));
    }
}
