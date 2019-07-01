import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/ordercomponent/services/customer.service';
import { Customer } from '../../viewmodel/customer';

@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.css']
})
export class CustomerMasterComponent implements OnInit {
  CustomerList:Customer[];
  constructor(private customerservice:CustomerService) { 
    this.CustomerList=[];

  }

  ngOnInit() {
    this.customerservice.getAllCustomers()
    .subscribe((res) => {
      this.CustomerList = res;
      console.log("employee"+res);
    },
    (err) => {
      //console.log("erorr in getallorders"+err);
    });
  }
  Deletecustomer(custid:number)
  {
    this.customerservice.Deletecustomer(custid).subscribe(e=>{console.log(true);});
  }
}
