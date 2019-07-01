import { Component, OnInit } from '@angular/core';
import { Category } from '../../viewmodel/category';
import { ProductService } from 'src/app/ordercomponent/services/product.service';

@Component({
  selector: 'app-product-master-page',
  templateUrl: './product-master-page.component.html',
  styleUrls: ['./product-master-page.component.css']
})
export class ProductMasterPageComponent implements OnInit {
categorylist:Category[];
selectCatID:number;
  constructor(private productservice:ProductService) {
 this.selectCatID=1;
this.categorylist=[];
   }

  ngOnInit() {
    this.productservice.getAllCategory().subscribe(p=>{this.categorylist=p;});
  }

}
