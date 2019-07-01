import { Injectable } from '@angular/core';
import { Product } from 'src/app/productcomponent/viewmodel/product';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Category } from 'src/app/productcomponent/viewmodel/category';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
productlist:Product[];
  constructor(private httpClient: HttpClient) 
   { 
     
  }
  getAllCategory(): Observable <Category[]> {
    return (this.httpClient.get <Category[]>(`${environment.API_URL}/Categoy/GetCategories`));
   }
   getAllProductsbycatid(catid:number): Observable <Product[]> {
    return (this.httpClient.get <Product[]>(`${environment.API_URL}/Product/GetProducts/${catid}`));
   }
   getProductsbyid(id:number): Observable <Product> {
    return (this.httpClient.get <Product>(`${environment.API_URL}/Product/GetProductbyID/${id}`));
   }
   insertproduct(newprd: Product): Observable <any> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': ' */*'
      // ,'Authorization': 'my-auth-token'
        })};

    return this.httpClient
    .post <any>(`${environment.API_URL}/Product/PostProduct`, newprd, httpOptions);
   }
   DeleteProduct(id:number): Observable <boolean> {
    return (this.httpClient.delete <boolean>(`${environment.API_URL}/Product/DeleteProduct/${id}`));
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
  getAllOrders(): Observable <Product[]> {
    return (this.httpClient.get <Product[]>(`${environment.API_URL}/Product/Get`));
   }
   ///////////////////
   getcategorybyid(id:number): Observable <Category> {
    return (this.httpClient.get <Category>(`${environment.API_URL}/Categoy/GetCategory/${id}`));
   }
   insertCategory(newcat: Category): Observable <any> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': ' */*'
      // ,'Authorization': 'my-auth-token'
        })};

    return this.httpClient
    .post <any>(`${environment.API_URL}/Categoy/PostCategory`, newcat, httpOptions);
   }
   Deletecategory(id:number): Observable <boolean> {
    return (this.httpClient.delete <boolean>(`${environment.API_URL}/Categoy/DeleteCategory/${id}`));
   }
   updateproductbyid(id:number,product:Product): Observable <boolean> {
    return (this.httpClient.put <boolean>(`${environment.API_URL}/Product/PutProduct/${id}`,product));
   }
   updatecategorybyid(id:number,cat:Category): Observable <boolean> {
    return (this.httpClient.put <boolean>(`${environment.API_URL}/Categoy/PutCategory/${id}`,cat));
   }
}
