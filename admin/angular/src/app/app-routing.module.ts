import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderMasterComponent } from './ordercomponent/order-master/order-master.component';
import { FooterComponent } from './layoutcomponent/footer/footer.component';
import { OrderdetailComponent } from './ordercomponent/orderdetail/orderdetail.component';
import { InsertOrderComponent } from './ordercomponent/insert-order/insert-order.component';
import { ProductMasterPageComponent } from './productcomponent/product/product-master-page/product-master-page.component';
import { InsertProductComponent } from './productcomponent/product/insert-product/insert-product.component';
import { ViewdetailsComponent } from './productcomponent/product/viewdetails/viewdetails.component';
import { UpdateProductComponent } from './productcomponent/product/update-product/update-product.component';
import { EmployeemasterComponent } from './productcomponent/Employee/employeemaster/employeemaster.component';
import { EmployeeDetailsComponent } from './productcomponent/Employee/employee-details/employee-details.component';
import { InsertEmployeeComponent } from './productcomponent/Employee/insert-employee/insert-employee.component';
import { UpdateEmployeeComponent } from './productcomponent/Employee/update-employee/update-employee.component';
import { CustomerMasterComponent } from './productcomponent/Customer/customer-master/customer-master.component';
import { CustomerDetailsComponent } from './productcomponent/Customer/customer-details/customer-details.component';
import { InsertCustomerComponent } from './productcomponent/Customer/insert-customer/insert-customer.component';
import { CategoryMasterComponent } from './productcomponent/Category/category-master/category-master.component';
import { CategoryDetailComponent } from './productcomponent/Category/category-detail/category-detail.component';
import { InsertCategoryComponent } from './productcomponent/Category/insert-category/insert-category.component';
import { UpdateCategoryComponent } from './productcomponent/Category/update-category/update-category.component';
import { LoginAdminComponent } from './productcomponent/login-admin/login-admin.component';
import { DashboardComponent } from './layoutcomponent/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'orders',component:OrderMasterComponent},
  {path: 'insertProduct',component:InsertProductComponent},
  {path: 'insertEmployee',component:InsertEmployeeComponent},
  {path: 'products',component:ProductMasterPageComponent},
  {path: 'orderdetails/:prdID',component:OrderdetailComponent},
  //{path: 'orderupdate/:prdID',component:OrderdetailComponent},
  {path: 'employeedetails/:prdID',component:EmployeeDetailsComponent},
  {path: 'productUpdate/:prdID',component:UpdateProductComponent},
  {path: 'employeeupdate/:prdID',component:UpdateEmployeeComponent},
  {path: 'Productdetails/:prdID',component:ViewdetailsComponent},
  {path: 'customerdetails/:prdID',component:CustomerDetailsComponent},
  {path: 'Employees',component:EmployeemasterComponent},
  {path: 'Customers',component:CustomerMasterComponent},
  {path: 'insertCustomer',component:InsertCustomerComponent},
  {path: 'categorys',component:CategoryMasterComponent},
  {path: 'categorydetails/:CatID',component:CategoryDetailComponent},
  {path: 'insertcategory',component:InsertCategoryComponent},
  //{path: 'dashboard',component:DashboardComponent},
  {path: 'categoryUpdate/:CatID',component:UpdateCategoryComponent},
  {path:'', component:LoginAdminComponent,pathMatch:'full'}
  //{path:'', component:FooterComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
