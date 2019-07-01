import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AdminLogin } from 'src/app/productcomponent/viewmodel/admin-login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private httpClient: HttpClient) { }

  getAllAdmin(): Observable <AdminLogin[]> {
    return (this.httpClient.get <AdminLogin[]>(`${environment.API_URL}/Admin_Login/Getadmin_Logins`));
   }
    GetOneAdminByID(custid:number):Observable <AdminLogin>
   {
    return (this.httpClient.get <AdminLogin>(`${environment.API_URL}/Admin_Login/Getadmin_Login/${custid}`));
   }
}
