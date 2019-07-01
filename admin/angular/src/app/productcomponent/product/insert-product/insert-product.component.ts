import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/ordercomponent/services/product.service';
import { Product } from '../../viewmodel/product';
import { Location } from '@angular/common';
import { Category } from '../../viewmodel/category';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {
  NewProduct:Product;
  flag:boolean;
  categorylist:Category[];
  constructor(private productservice:ProductService,private location: Location) { 
    this.NewProduct=new Product();
    this.flag=false;
    this.categorylist=[];
    // public string OfferTitle { get; set; }
    //     public string OfferBadgeClass { get; set; }
    //     public string ShortDescription { get; set; }
    //     public string LongDescription { get; set; }
    //     public string Picture1 { get; set; }
    //     public string Picture2 { get; set; }
    //     public string Picture3 { get; set; }
    //     public string Picture4 { get; set; }
    //     public string Note { get; set; }
    // public string ImageURL { get; set; }
    // public string AltText { get; set; }
    // public string UnitWeight { get; set; }
    // public string Size { get; set; }
    this.NewProduct.Size="test";
    this.NewProduct.UnitWeight="test";
    this.NewProduct.Picture1=null;
    this.NewProduct.Picture2=null;
    this.NewProduct.Picture3=null;
    this.NewProduct.Picture4=null;
    this.NewProduct.OfferTitle="test";
    this.NewProduct.OfferBadgeClass="test";
    this.NewProduct.ShortDescription="test";
    this.NewProduct.LongDescription="test";
    this.NewProduct.AltText="test";
    this.NewProduct.ImageURL="assets/inst.png";
  }
  saveproduct() {
    // ev.preventDefault();
    //console.log(JSON.stringify(this.newPrd));

     this.productservice.insertproduct(this.NewProduct)
     .subscribe(
       (data) => {console.log (JSON.stringify(data));this.flag=true;console.log(this.flag) },
       (err) => {console.log(err);
       });
      
    //this.router.navigate(['/productsFromAPI']);
    this.NewProduct.Size="test";
    this.NewProduct.UnitWeight="test";
    this.NewProduct.Picture1=null;
    this.NewProduct.Picture2=null;
    this.NewProduct.Picture3=null;
    this.NewProduct.Picture4=null;
    this.NewProduct.OfferTitle="test";
    this.NewProduct.OfferBadgeClass="test";
    this.NewProduct.ShortDescription="test";
    this.NewProduct.LongDescription="test";
    this.NewProduct.AltText="test";
    this.NewProduct.ImageURL="assets/inst.png";
  }
  ngOnInit() {
    this.productservice.getAllCategory().subscribe(c=>{this.categorylist=c;console.log(c);});
  }
  goBack() {
    this.location.back();
  }
}
