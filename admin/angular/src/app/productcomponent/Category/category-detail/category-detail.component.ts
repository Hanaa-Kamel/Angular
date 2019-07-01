import { Component, OnInit } from '@angular/core';
import { Category } from '../../viewmodel/category';
import { ProductService } from 'src/app/ordercomponent/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  category:Category;
  constructor(private location:Location,private productservice:ProductService,
    private activatedservices:ActivatedRoute) { 
    this.category=new Category();
  }

  ngOnInit() {
    const id=this.activatedservices.snapshot.params['CatID'];
    this.productservice.getcategorybyid(id).subscribe(c=>{this.category=c;})
  }
  goBack()
  {
    this.location.back();
  }
}
