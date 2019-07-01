import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from 'src/app/ordercomponent/services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../viewmodel/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit,OnChanges {
  
  @Input() selectedCatIDFrmproductMaster: number;
  prdListOfSelCat:Product[];
  constructor(private productservice:ProductService,private router: Router) { 
    //this.selectedCatIDFrmproductMaster=1;
    //this.prdListOfSelCat=[];
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    //this.prdListOfSelCat=[];
     this.productservice.getAllProductsbycatid(this.selectedCatIDFrmproductMaster)
     .subscribe((res)=>{this.prdListOfSelCat=res;console.log(res);});
  }
  DeleteProduct(id:number)
  {
    this.productservice.DeleteProduct(id).subscribe(p=>{console.log(p)});
  }
  ngOnInit() {
  }

}
