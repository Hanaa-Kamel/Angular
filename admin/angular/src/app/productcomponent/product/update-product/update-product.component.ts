import { Component, OnInit } from '@angular/core';
import { Product } from '../../viewmodel/product';
import { ProductService } from 'src/app/ordercomponent/services/product.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  NewProduct:Product;
  flag:boolean;
  oldPrd:Product;
  constructor(private productservice:ProductService,private location: Location,
    private activatedrouter:ActivatedRoute) {
      this.oldPrd=new Product();
      this.NewProduct=new Product();
      //
      
    // const id=this.activatedrouter.snapshot.params['prdID'];
    // this.productservice.getProductsbyid(id)
    // .subscribe((res) =>
    //  {this.oldPrd.ProductID=res.ProductID;
    //   this.oldPrd.CategoryID=res.CategoryID;
    //   this.oldPrd.UnitPrice=res.UnitPrice;
    //   this.oldPrd.Name=res.Name;
    //   this.oldPrd.QuantityPerUnit=res.QuantityPerUnit;
    //   console.log("error in ::"+"id="+id+"  "+res.ImageURL);});
     }
  saveproduct() {
    // ev.preventDefault();
    //console.log(JSON.stringify(this.newPrd));

     this.productservice.updateproductbyid(this.oldPrd.ProductID,this.NewProduct)
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
    
    const id=this.activatedrouter.snapshot.params['prdID'];
    this.productservice.getProductsbyid(id)
    .subscribe((res) =>
     {this.oldPrd.ProductID=res.ProductID;
      this.oldPrd.CategoryID=res.CategoryID;
      this.oldPrd.UnitPrice=res.UnitPrice;
      this.oldPrd.Name=res.Name;
      this.oldPrd.QuantityPerUnit=res.QuantityPerUnit;
      console.log("error in ::"+"id="+id+"  "+res.ImageURL);});
  }
  goBack() {
    this.location.back();
  }
}
