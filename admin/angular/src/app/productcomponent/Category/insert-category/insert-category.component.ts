import { Component, OnInit } from '@angular/core';
import { Category } from '../../viewmodel/category';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/ordercomponent/services/product.service';

@Component({
  selector: 'app-insert-category',
  templateUrl: './insert-category.component.html',
  styleUrls: ['./insert-category.component.css']
})
export class InsertCategoryComponent implements OnInit {
  NewCategory:Category;
  constructor(private location:Location,private productservice:ProductService) { 
    this.NewCategory=new Category();
    this.NewCategory.Picture1="assets/inst.png";
    this.NewCategory.Picture2="assets/inst.png";
    this.NewCategory.IsActive=true;
  }

  ngOnInit() {
  }
  savecategory()
  {
    this.NewCategory.Picture1="assets/inst.png";
    this.NewCategory.Picture2="assets/inst.png";
    this.NewCategory.IsActive=true;
    this.productservice.insertCategory(this.NewCategory).subscribe(c=>{console.log(c);});
    
  }
  goBack()
  {
    this.location.back();
  }
}
