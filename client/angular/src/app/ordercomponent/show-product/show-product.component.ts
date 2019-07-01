import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/productcomponent/viewmodel/product';
import { Location } from '@angular/common';
import { Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';
import { LocalstorageService } from '../services/localstorage.service';
import { LocalstorageloginService } from '../services/localstoragelogin.service';
import { User } from 'src/app/productcomponent/viewmodel/user';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  product:Product;
  userlogin:User;
  puidprd:number;
  prodd:Product;
  @Output() AddProductToCartChanged: EventEmitter<number>;
  constructor(private activatedrouter:ActivatedRoute,private location:Location,
    private productservice:ProductService,private interactionservice:InteractionService,
    private localstorageservice:LocalstorageService,
    private localstoragelogin:LocalstorageloginService) { 
      this.product=new Product();
      this.AddProductToCartChanged=new EventEmitter<number>();
      this.puidprd=0;
      this.userlogin=new User();
      this.prodd=new Product();
    }

    onBuyClick(prdID: number): void {
      
      this.AddProductToCartChanged.emit(prdID);
     }
  ngOnInit() {
    
    const id=this.activatedrouter.snapshot.params['prdID'];
    this.puidprd=id;
    this.productservice.getProductbyid(id).subscribe((res) => {this.product=res;});
  }
  goback()
  {
    this.location.back();
  }
  ///////////////
  sendid(prdid:number)
  {
    this.interactionservice.sendproductID(this.puidprd);
    this.productservice.getProductbyid(this.puidprd).subscribe(p=>{this.prodd=p;
      console.log(p);
    if(p.UnitInStock>0)
  {
    this.localstorageservice.storeOnLocalStorage(this.puidprd);
  }
  else
  {
    alert("this product has not quantuty");
  }
});
  //   this.userlogin=this.localstoragelogin.retrivefromLocalStoragelogin();
  //   if(this.userlogin.Email !='' && this.userlogin.Password !='')
  //  {
    // console.log("stack="+this.prodd);
    // if(this.prodd.UnitInStock>0)
    // {
    //   this.localstorageservice.storeOnLocalStorage(this.puidprd);
    // }
    // else
    // {
    //   alert("this product has not quantuty");
    // }
  //  }
  //  else
  //  {
  //    alert("you must be login before to buy");
  //  }
  }
  preciat(prdid:number)
  {
    this.interactionservice.sendproductID(prdid);
  }
}
