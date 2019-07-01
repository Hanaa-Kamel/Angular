import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/productcomponent/viewmodel/product';
import { EventEmitter } from 'events';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit,OnChanges {
  
 
@Input() selectedcatidfrommaster:number;
prdlist:Product[];
orderTotalPrice:number;
//@output() TotalpriceChanged:EventEmitter<number>;
  constructor(private prdservice:ProductService,private activatedrouter:ActivatedRoute)
   { 
   this.orderTotalPrice=0;
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    //this.prdservice.getAllProductsbycatName(this.selectedcatidfrommaster).subscribe(p=>{this.prdlist=p;console.log(p);});
    //this.prdservice.getAllProductsbycatid(this.selectedcatidfrommaster).subscribe(p=>{this.prdlist=p;console.log(p);});
  
  }
  ngOnInit(){
    
    const id=this.activatedrouter.snapshot.params['catID'];
    this.prdservice.getAllProductsbycatid(id).subscribe((res) => {this.prdlist=res;});
  }
  }
  // OnByclick(prdprice:number,prdquantity:number):void  
  // {
  //   this.orderTotalPrice +=prdprice*prdquantity;
  // }
  // ngOnInit() {
  // }

//}
