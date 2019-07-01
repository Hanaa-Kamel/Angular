import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/ordercomponent/services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../viewmodel/employee';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  NewEmployee:Employee;
  flag:boolean;
  oldemployee:Employee;
  constructor(private location:Location,private employeeservice:EmployeeService,
    private activatedrouter:ActivatedRoute) {
      this.NewEmployee=new Employee();
      this.flag=false;
      this.oldemployee=new Employee();
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

  const id=this.activatedrouter.snapshot.params['prdID'];
  this.employeeservice.GetOneEmployeeByID(id)
  .subscribe((res) =>
    {this.oldemployee=res;
  //   this.oldPrd.CategoryID=res.CategoryID;
  //   this.oldPrd.UnitPrice=res.UnitPrice;
  //   this.oldPrd.Name=res.Name;
  //   this.oldPrd.QuantityPerUnit=res.QuantityPerUnit;
    console.log("error in ::"+"id="+id+"  "+res.FirstName);});
 }
 goBack() {
   this.location.back();
 }

}
