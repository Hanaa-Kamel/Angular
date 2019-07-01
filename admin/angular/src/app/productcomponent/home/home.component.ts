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
  }
  ngOnInit() {
  }

}
