import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/ordercomponent/services/employee.service';
import { Employee } from '../../viewmodel/employee';
import { Location } from '@angular/common';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrls: ['./insert-employee.component.css']
})
export class InsertEmployeeComponent implements OnInit {
  NewEmployee:Employee;
  flag:boolean;
  constructor(private employeeservice:EmployeeService,private location:Location) {
    this.NewEmployee=new Employee();
    this.flag=false;
    this.NewEmployee.Gender="test";
    this.NewEmployee.Phone="test";
    this.NewEmployee.PhotoPath="test";
   }

  saveemployee() {
   
     this.employeeservice.insertemployee(this.NewEmployee)
     .subscribe(
       (data) => {console.log (JSON.stringify(data));this.flag=true;console.log(this.flag) },
       (err) => {console.log(err);
       });
      
    //this.router.navigate(['/productsFromAPI']);
    this.NewEmployee.Gender="test";
    this.NewEmployee.Phone="test";
    this.NewEmployee.PhotoPath="test";
   
  }
  
  ngOnInit() {

  }
  goBack() {
    this.location.back();
  }
}
