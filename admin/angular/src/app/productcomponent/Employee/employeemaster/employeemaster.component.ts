import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/ordercomponent/services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../viewmodel/employee';

@Component({
  selector: 'app-employeemaster',
  templateUrl: './employeemaster.component.html',
  styleUrls: ['./employeemaster.component.css']
})
export class EmployeemasterComponent implements OnInit {
EmployeeList:Employee[];
  constructor(private employeeservice:EmployeeService, private router: Router) { 
    this.EmployeeList=[];
  }

  ngOnInit() {
    this.employeeservice.getAllEmployees()
    .subscribe((res) => {
      this.EmployeeList = res;
      console.log("employee"+res);
    },
    (err) => {
      //console.log("erorr in getallorders"+err);
    });
  }
  Deleteemployee(empid:number)
  {
this.employeeservice.Deleteemployee(empid).subscribe(e=>{console.log(true);});
  }
}
