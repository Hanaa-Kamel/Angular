import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
private productlist=new Subject<number>();
productlist$=this.productlist.asObservable();

private frmMasterarrayproduct=new Subject<number[]>();
frmMasterarrayproduct$=this.frmMasterarrayproduct.asObservable();

private loginemail=new Subject<string>();
loginemail$=this.loginemail.asObservable();

  constructor() { }
  sendproductID(prdid:number)
  {
    this.productlist.next(prdid);
  }
  //
  sendarrayofproductID(prdids:number[])
  {
    this.frmMasterarrayproduct.next(prdids);
  }
  sendlogin(email:string)
  {
    this.loginemail.next(email);
  }
}
