import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowProductComponent } from './ordercomponent/show-product/show-product.component';
import { OrderMasterComponent } from './ordercomponent/order-master/order-master.component';
import { OrderdetailComponent } from './ordercomponent/orderdetail/orderdetail.component';
import { ShowCartComponent } from './ordercomponent/show-cart/show-cart.component';
import { LoginuserComponent } from './ordercomponent/loginuser/loginuser.component';
//
const routes: Routes = [
  {path: 'Productsbycatid/:catID',component:OrderdetailComponent},
  {path: 'Productdetails/:prdID',component:ShowProductComponent},
  {path: 'showcart',component:ShowCartComponent},
  {path: 'Login',component:LoginuserComponent}
  //{path: 'master',component:OrderMasterComponent}
  //{path:'', component:OrderMasterComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
