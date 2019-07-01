import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/ordercomponent/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../viewmodel/product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  product:Product;
  constructor(private productservice:ProductService,private activatedrouter:ActivatedRoute,
    private location:Location) {
    this.product=new Product();
   }

  ngOnInit() {
    
    const id=this.activatedrouter.snapshot.params['prdID'];
    this.productservice.getProductsbyid(id).subscribe((res) => {this.product=res;});
  }
  goBack() {
    this.location.back();
  }
}
