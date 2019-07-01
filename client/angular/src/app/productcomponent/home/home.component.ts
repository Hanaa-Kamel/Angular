import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../viewmodel/discount-offers.enum';
import { Product } from '../viewmodel/product';
import { Category } from '../viewmodel/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
imgpath:string;
//
Discount:DiscountOffers;
Store_name:string;
Store_Logo:string;
ProductList:Product[];
CategoryList:Category[];
ClientName:string;
IsPurshased:boolean;
  constructor() 
  { 
    this.imgpath="assets/inst.png";
    this.Discount=DiscountOffers["10%"];
this.Store_name="storeresturant";
this.Store_Logo="assets/inst.png";
// this.ProductList=[
//   new Product(1,'milk',5,20,"assets/inst.png"),
//   new Product(2,'choclate',7,50,'assets/inst.png'),
//   new Product(3,'banna',90,100,'assets/inst.png')
// ];
// this.CategoryList=[new Category(1,'vegetabiles'),new Category(2,'meat'),new Category(3,'fruit')];
// this.ClientName="Samar";
// this.IsPurshased=true;
//   }
// ToggleActiveStatus(): void
// {
//   this.IsPurshased=!this.IsPurshased;
 }
  ngOnInit() {
  }

}
