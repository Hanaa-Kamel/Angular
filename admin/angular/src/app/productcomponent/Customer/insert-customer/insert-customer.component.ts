import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/ordercomponent/services/customer.service';
import { Customer } from '../../viewmodel/customer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-insert-customer',
  templateUrl: './insert-customer.component.html',
  styleUrls: ['./insert-customer.component.css']
})
export class InsertCustomerComponent implements OnInit {
  NewCustomer:Customer;
flag:boolean;

  constructor(private customerservice:CustomerService,private location:Location) { 
    this.NewCustomer=new Customer();
    this.flag=false;
    //
    
   this.NewCustomer.Gender="Male";
   this.NewCustomer.Phone1="01123456";
   this.NewCustomer.Phone2="0123453322";
   this.NewCustomer.UserName="Ahmed";
   this.NewCustomer.Password="123456";
   this.NewCustomer.Mobile2="0987667";
   this.NewCustomer.Phone1="67676";
   this.NewCustomer.Phone2="98989";
   this.NewCustomer.Mobile2="4545";
   this.NewCustomer.AltEmail="samar@gmail.com";
   this.NewCustomer.Country="egypt";
   this.NewCustomer.Notes="welcome";
   this.NewCustomer.status="single";
   this.NewCustomer.PostalCode="2323";
   this.NewCustomer.Organization="company";
   this.NewCustomer.City="cairo";
   this.NewCustomer.Address2="elzazaek";
   this.NewCustomer.Picture="img";
  }

  savecustomer() {
   
    this.customerservice.insercustomer(this.NewCustomer)
    .subscribe(
      (data) => {console.log (JSON.stringify(data));this.flag=true;console.log(this.flag) },
      (err) => {console.log(err);
      });
     
  //  //this.router.navigate(['/productsFromAPI']);
  //  this.NewCustomer.Gender="Male";
  //  this.NewCustomer.Phone1="01123456";
  //  this.NewCustomer.Phone2="0123453322";
  //  this.NewCustomer.UserName="Ahmed";
  //  this.NewCustomer.Password="123456";
  //  this.NewCustomer.Mobile2="0987667";
  //  this.NewCustomer.Phone1="67676";
  //  this.NewCustomer.Phone2="98989";
  //  this.NewCustomer.Mobile2="4545";
  //  this.NewCustomer.AltEmail="samar@gmail.com";
  //  this.NewCustomer.Country="egypt";
  //  this.NewCustomer.Notes="welcome";
  //  this.NewCustomer.status="single";
  //  this.NewCustomer.PostalCode="2323";
  //  this.NewCustomer.Organization="company";
  //  this.NewCustomer.City="cairo";
  //  this.NewCustomer.Address2="elzazaek";
  //  this.NewCustomer.Picture="img";
  
 }
 
 ngOnInit() {

 }
 goBack() {
   this.location.back();
 }

}
