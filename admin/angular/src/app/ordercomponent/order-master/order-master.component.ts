import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/productcomponent/viewmodel/category';
import { Order } from 'src/app/productcomponent/viewmodel/order';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit {
categorylist:Category[];
selectedCatID:number;
orderlist:Order[];
order:Order;
Ordernumber:number;
NewOrder:Order;
flag:boolean;
  constructor(private orderlistservice:OrderService, private router: Router) { 
    
    //this.orderlist=orderlistservice.getAllOrders();
    this.order=new Order();
    this.Ordernumber=0;
    this.NewOrder=new Order();
    this.flag=false;
  }

  ngOnInit() {
    this.orderlistservice.getAllOrders()
      .subscribe((res) => {
        this.orderlist = res;
      },
      (err) => {
        console.log("erorr in getallorders"+err);
      });
      //getoneorder
      // this.orderlistservice.GetOneOrderByID(this.Ordernumber)
      // .subscribe((res) => {
      //   this.order = res;
      // },
      // (err) => {
      //   console.log("erorr in getallorders"+err);
      // });
      //insert
     //this.saveOrder();
     ///DeleteOrder
    //  this.orderlistservice.DeleteOrder(this.Ordernumber)
    //   .subscribe((res) => {
    //     //this.order = res;
    //     console.log(true);
    //   },
    //   (err) => {
    //     console.log("erorr in detete orders"+err);
    //   });
  }
  Deleteorder(id:number):void
  { 
   this.orderlistservice.DeleteOrder(id).subscribe(r=>{console.log(r)});
  }
  saveOrder() {
    // ev.preventDefault();
    //console.log(JSON.stringify(this.newPrd));

     this.orderlistservice.insertOrder(this.NewOrder)
     .subscribe(
       (data) => {console.log (JSON.stringify(data));this.flag=true;console.log(this.flag) },
       (err) => {console.log(err);
       });
      
    //this.router.navigate(['/productsFromAPI']);
  }
  // ViewOrderDetails(prdID: number) {
  //   //this.router.navigate(['/orderdetails', prdID]);(`${environment.API_URL}/Order/${ordid}`)
  // this.router.navigate([(`${environment.API_URL}/Order`), prdID])
  // }
}
