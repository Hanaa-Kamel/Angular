import { Component, OnInit, OnChanges } from '@angular/core';
import { InteractionService } from '../services/interaction.service';
import { Product } from 'src/app/productcomponent/viewmodel/product';
import { ProductService } from '../services/product.service';
import { LocalstorageService } from '../services/localstorage.service';
import { Order } from 'src/app/productcomponent/viewmodel/order';
import { OrderDetail } from 'src/app/productcomponent/viewmodel/order-detail';
import { OrderService } from '../services/order.service';
import { OrderDetailService } from '../services/order-detail.service';
import { User } from 'src/app/productcomponent/viewmodel/user';
import { LocalstorageloginService } from '../services/localstoragelogin.service';
import { Router } from '@angular/router';
import { DTOtotalprice } from 'src/app/productcomponent/viewmodel/dtototalprice';
import { maybeQueueResolutionOfComponentResources } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit,OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
   // this.myfunc();
  }
arrayofids:number[];
listofproducts:Product[];
orderTotalPrice:number;
//
orderins:Order;
orderDetailins:OrderDetail;
listproductsremove:number[];
userlogin:User;
listofDTototalprice:DTOtotalprice[];
  constructor(private interactionservice:InteractionService,private productservice:ProductService,
    private localstorageservice:LocalstorageService,private orderservice:OrderService,
    private orderdetailservice:OrderDetailService,private localstoragelogin:LocalstorageloginService,
    private router:Router) {
    this.listofproducts=[];
    this.orderTotalPrice=0;
    this.orderins=new Order();
    this.orderDetailins=new OrderDetail();
    this.listproductsremove=[];
    this.userlogin=new User();
    this.listofDTototalprice=[];
   }
   OnByclick(price:number,quatity:number,productID:number,Availquantity:number)
   {
     let q=0;
     let  DToTotalpric=new DTOtotalprice();
     DToTotalpric.Price=price;
     DToTotalpric.NeedQuantity=quatity;
     DToTotalpric.ProductID=productID;
     DToTotalpric.AvailableQuantity=Availquantity;
     
    this.listofproducts.filter(p=>{if(p.ProductID==productID)
    {
      if(p.UnitInStock>=quatity && quatity!=p.Totalprice/p.UnitPrice)
      {
        if(p.Totalprice>0)
        {
          p.UnitInStock+=p.Totalprice/p.UnitPrice;
           console.log("stack"+p.UnitInStock);
            //p.UnitInStock+=q;
          
          p.UnitInStock=p.UnitInStock-quatity;
          
        }
        else
        {
          p.UnitInStock=p.UnitInStock-quatity;
        }
        p.Totalprice=p.UnitPrice*quatity;
        //let product=this.productservice.getProductbyid(p.ProductID);
       
        //this.orderTotalPrice += ( price * quatity );
        this.orderTotalPrice=0;
        for(let prd of this.listofproducts)
        {
          if(prd.Totalprice>0)
         { 
          this.orderTotalPrice=this.orderTotalPrice + prd.Totalprice;
          console.log(this.orderTotalPrice);
         }
        }
      }
      else
      {
        alert("sorry no quantity available or enetr quantity required you");
      } 
    }
    });

     this.listofDTototalprice.push(DToTotalpric);
    //this.interactionservice.sendproductID(this.puidprd);
    //   this.userlogin=this.localstoragelogin.retrivefromLocalStoragelogin();
    //   if(this.userlogin.Email !='' && this.userlogin.Password !='')
    //  {
      
     // t
    //  }
    //  else
    //  {
    //    alert("you must be login before to buy");
    //    this.router.navigate(['/Login']);
    //  }
     
   }
   OnByclickremove(prdid:number)
   {
     
     this.listproductsremove.push(prdid);
     //this.ngOnInit();
     //this.localstorageservice.RemovefromLocalStorage(prdid);
   }
   myfunc()
{
  this.listofproducts=[];
this.arrayofids=this.localstorageservice.retrivefromLocalStorage();
if(this.listproductsremove.length==0)
{
  for(let i of this.arrayofids)
  {
    this.productservice.getProductbyid(i).subscribe(p=>{
      if(p.UnitInStock>0)
      {
        this.listofproducts.push(p);
      console.log(p);
      }
    });
  }
}
else
{
  for(let i of this.arrayofids)
      {
        if(!(this.listproductsremove.includes(i)))
        this.productservice.getProductbyid(i).subscribe(p=>{
          if(p.UnitInStock>0)
          {
            this.listofproducts.push(p);
          console.log(p);
          }
        });
      }
}    
}
  ngOnInit() {
    // this.interactionservice.frmMasterarrayproduct$.subscribe(res=>{
    //   this.arrayofids=res;
    //   console.log(res);
    //   for(let i of this.arrayofids)
    //   {
    //     this.productservice.getProductbyid(i).subscribe(p=>{
    //       this.listofproducts.push(p);
    //       console.log(p);
    //     });
    //   }
    // });
//console.log("list:"+this.listofproducts);
//////////////
this.myfunc();
console.log("list:"+this.listofproducts);
}  
    //
    clearlocalstorage()
    {
      // for(let prod of this.listofproducts)
      // {
      //   this.productservice.updateProductbyid(prod.ProductID,prod).subscribe(p=>{console.log()});
      // }
      //enter insert into order and orderdetails
      const d=new Date();
      this.orderins.OrderID=116;
      this.orderins.CustomerID=1;
      this.orderins.PaymentID=1;
      this.orderins.ShippingID=5;
      this.orderins.Notes="this order is very good";
      //this.orderins.TotalAmount=this.t
      //this.orderins.OrderDate=d;
      //this.orderins.TotalAmount=this.orderTotalPrice;
      ///
      // this.orderservice.insertOrder(this.orderins).subscribe(o=>{console.log(o);});
      // for(let prd of this.listofproducts)
      // { 
      //   this.orderDetailins.OrderDetailsID=1;
      //   this.orderDetailins.OrderID=this.orderins.OrderID;
      //   this.orderDetailins.ProductID=prd.ProductID;
      //   this.orderDetailins.UnitPrice=prd.UnitPrice;
      //   this.orderDetailins.TotalAmount=prd.Totalprice;
      //   //this.orderDetailins.OrderDate=new Date();
      //   //this.orderDetailins.Discount=0;
      //   //this.orderDetailins.Quantity=this.orderins.OrderID;
      //   this.orderdetailservice.insertOrderDetail(this.orderDetailins).subscribe(p=>{console.log(p)});
      // }
      ///
      this.localstorageservice.clearLocalStorage();
    }
}
