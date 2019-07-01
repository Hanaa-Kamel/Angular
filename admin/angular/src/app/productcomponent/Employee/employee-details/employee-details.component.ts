import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/ordercomponent/services/employee.service';
import { Employee } from '../../viewmodel/employee';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
employee:Employee;
  constructor(private activatedrouter:ActivatedRoute,private employeeservice:EmployeeService,
    private location:Location) {
      this.employee=new Employee();
     }

  ngOnInit() {
    
    const id=this.activatedrouter.snapshot.params['prdID'];
    this.employeeservice.GetOneEmployeeByID(id).subscribe((res) => {this.employee=res;});
  }
  goBack() {
    this.location.back();
  }
}
