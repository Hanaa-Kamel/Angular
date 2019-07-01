import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/ordercomponent/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../viewmodel/category';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  OldCategory:Category;
  NewCategory:Category;
  constructor(private location:Location,private productservice:ProductService,
    private activatedrouter:ActivatedRoute) { 
      this.OldCategory=new Category();
      this.NewCategory=new Category();
      this.OldCategory.Picture1="assets/inst.png";
    this.OldCategory.Picture2="assets/inst.png";
    this.OldCategory.IsActive=true;
    }

  ngOnInit() {
    const id=this.activatedrouter.snapshot.params['CatID'];
    this.productservice.getcategorybyid(id).subscribe(c=>{this.OldCategory=c;});

  }
  savecategory()
  {
    this.OldCategory.Picture1="assets/inst.png";
    this.OldCategory.Picture2="assets/inst.png";
    this.OldCategory.IsActive=true;
    this.productservice.updatecategorybyid(this.OldCategory.CategoryID,this.OldCategory).subscribe(c=>{console.log(c);});
    
  }
  goBack(){
    this.location.back();
  }
}
