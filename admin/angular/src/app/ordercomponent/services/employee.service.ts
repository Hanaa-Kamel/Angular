import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Employee } from 'src/app/productcomponent/viewmodel/employee';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }
  getAllEmployees(): Observable <Employee[]> {
    return (this.httpClient.get <Employee[]>(`${environment.API_URL}/Admin_Employee/Getadmin_Employee`));
   }
    GetOneEmployeeByID(empid:number):Observable <Employee>
   {
    return (this.httpClient.get <Employee>(`${environment.API_URL}/Admin_Employee/Getadmin_Employee/${empid}`));
   }
    insertemployee(newEmp: Employee): Observable <any> {
     const httpOptions = {headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Accept': ' */*'
       // ,'Authorization': 'my-auth-token'
         })};

     return this.httpClient
     .post <any>(`${environment.API_URL}/Admin_Employee/Postadmin_Employee`, newEmp, httpOptions);
    }
    Deleteemployee(empID:number)
    {
      return (this.httpClient.delete <boolean>(`${environment.API_URL}/Admin_Employee/Deleteadmin_Employee/${empID}`));
    }
    
}
