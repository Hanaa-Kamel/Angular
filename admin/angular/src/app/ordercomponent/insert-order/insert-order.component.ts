import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from 'src/app/productcomponent/viewmodel/order';
import { Location } from '@angular/common';
@Component({
  selector: 'app-insert-order',
  templateUrl: './insert-order.component.html',
  styleUrls: ['./insert-order.component.css']
})
export class InsertOrderComponent implements OnInit {
  NewOrder:Order;
  flag:boolean;
  constructor(private orderservice:OrderService,private location: Location) {
    this.NewOrder=new Order();
    this.flag=false;
   }
   saveOrder() {
    // ev.preventDefault();
    //console.log(JSON.stringify(this.newPrd));

     this.orderservice.insertOrder(this.NewOrder)
     .subscribe(
       (data) => {console.log (JSON.stringify(data));this.flag=true;console.log(this.flag) },
       (err) => {console.log(err);
       });
      
    //this.router.navigate(['/productsFromAPI']);
  }
  ngOnInit() {

  }
  goBack() {
    this.location.back();
  }
}
