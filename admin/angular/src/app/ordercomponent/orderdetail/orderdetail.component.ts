import { Component, OnInit, OnChanges, Input, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/productcomponent/viewmodel/product';
import { EventEmitter } from 'events';
import { Order } from 'src/app/productcomponent/viewmodel/order';
import { OrderService } from '../services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
//import { EventEmitter } from '';
import { Location } from '@angular/common';
import { CustomerService } from '../services/customer.service';
import { Customer } from 'src/app/productcomponent/viewmodel/customer';
import { OrderDetail } from 'src/app/productcomponent/viewmodel/order-detail';
import { OrderDetailService } from '../services/order-detail.service';
@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit,OnChanges {
public order:Order;
Ordernumber:number;

//@Output() TotalpriceChanged : EventEmitter<number>;
@Input() selectedcatidfrommaster:number;
prdlist:Product[];
orderTotalPrice:number;
  customer:Customer;
  cid:number;
  orderdetail:OrderDetail[];
  orddetID:number;
//@Output() TotalpriceChanged : EventEmitter<number>;
  constructor(private prdservice:ProductService,private orderservice:OrderService,
    private router:Router,private activatedrouter:ActivatedRoute,private location:Location,
    private customerservice:CustomerService,private orderdetailservice:OrderDetailService)
   { 
     this.orddetID=1;
     this.orderdetail=[];
   this.orderTotalPrice=0;
   this.order=new Order();
   this.Ordernumber=0;
   this.customer=new Customer();
   this.cid=1;
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    //this.prdlist=this.prdservice.GetallProductByCatID(this.selectedcatidfrommaster);
  }
  OnByclick(prdprice:number,prdquantity:number):void
  {
    this.orderTotalPrice +=prdprice*prdquantity;
  }
  ngOnInit() {
    
    const id=this.activatedrouter.snapshot.params['prdID'];
    this.orderservice.GetOneOrderByID(id).subscribe((res) => {this.order=res;this.cid=this.order.CustomerID});
    ///
    //console.log("customerid"+this.order.CustomerID);
    //const cid=;
    //const cid=this.activatedrouter.snapshot.params['prdID'];
    this.customerservice.GetOneCustomerByID(this.cid).subscribe((res) => {this.customer=res;});
    //
    this.orderdetailservice.getAllOrderDetailsbyorderid(id).subscribe(res=>{this.orderdetail=res;console.log(res);})
    //
    //this.order = this.orderservice.GetOneOrderByID(id);
    // this.orderservice.GetOneOrderByID(id)
    //   .subscribe((res) => {
    //     this.order = res;
    //   },
    //   (err) => {
    //     console.log("erorr in getallorders"+err);
    //   });

      
  }
  goBack() {
    this.location.back();
  }
}
