import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/productcomponent/viewmodel/category';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/productcomponent/viewmodel/product';
import { InteractionService } from '../services/interaction.service';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit {
categorylist:Category[];
selectedCatID:number;
selectedCatname:number;
arraylistofproduct:number[];
numbersofproductsincart:number;
  constructor(private productservice:ProductService,private interactionservice:InteractionService,
    private localstotageproduct:LocalstorageService) { 
    this.categorylist=[];
    this.selectedCatID=0;
    this.selectedCatname=0;
    this.arraylistofproduct=[];
    this.numbersofproductsincart=0;
  }
  byclick(name:number)
  {
    this.selectedCatname=name;
  }
  onaddproduct(prdid:number)
  {
    //this.arraylistofproduct.push(prdid);
    //this.arraylistofproduct.find
  }
 ngOnInit() {
    this.productservice.getAllCategory().subscribe(p=>{this.categorylist=p;console.log(p);});

    ////////
    this.interactionservice.productlist$.subscribe(prdid=>{
      const dd=this.arraylistofproduct.find(p=>p==prdid);
      if(dd==undefined)
      {
        this.arraylistofproduct.push(prdid);
      }
      alert(prdid);
    });

    //
   this.numbersofproductsincart=this.localstotageproduct.retrivefromLocalStorage().length;
  }

  //
  showcart()
  {
    this.interactionservice.sendarrayofproductID(this.arraylistofproduct);
  }
}
