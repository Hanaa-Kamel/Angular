import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/ordercomponent/services/customer.service';
import { Customer } from '../../viewmodel/customer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer:Customer;
  constructor(private activatedrouter:ActivatedRoute,private customerservice:CustomerService,
    private location:Location) { 
this.customer=new Customer();
  }

  ngOnInit() {
    
    const id=this.activatedrouter.snapshot.params['prdID'];
    this.customerservice.GetOneCustomerByID(id).subscribe((res) => {this.customer=res;});
  }
  goBack() {
    this.location.back();
  }
}
