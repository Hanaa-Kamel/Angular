import { Component, OnInit } from '@angular/core';
import { Category } from '../../viewmodel/category';
import { ProductService } from 'src/app/ordercomponent/services/product.service';

@Component({
  selector: 'app-category-master',
  templateUrl: './category-master.component.html',
  styleUrls: ['./category-master.component.css']
})
export class CategoryMasterComponent implements OnInit {
  categoryslist:Category[];
  constructor(private productservice:ProductService) {
    this.categoryslist=[];
   }

  ngOnInit() {
    this.productservice.getAllCategory().subscribe(c=>{this.categoryslist=c;console.log(c);});
  }
  DeleteCategory(catID:number)
  {
    this.productservice.Deletecategory(catID).subscribe(c=>{console.log(c);});
  }
}
