import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layoutcomponent/header/header.component';
import { FooterComponent } from './layoutcomponent/footer/footer.component';
import { ContentComponent } from './layoutcomponent/content/content.component';
import { HomeComponent } from './productcomponent/home/home.component';
import { HighlightDirective } from './productcomponent/viewmodel/highlight.directive';
import { FormsModule } from '@angular/forms';
import { OrderMasterComponent } from './ordercomponent/order-master/order-master.component';
import { OrderdetailComponent } from './ordercomponent/orderdetail/orderdetail.component';
import { InsertOrderComponent } from './ordercomponent/insert-order/insert-order.component';
import { ProductMasterPageComponent } from './productcomponent/product/product-master-page/product-master-page.component';
import { ProductDetailsComponent } from './productcomponent/product/product-details/product-details.component';
import { InsertProductComponent } from './productcomponent/product/insert-product/insert-product.component';
import { UpdateProductComponent } from './productcomponent/product/update-product/update-product.component';
import { ViewdetailsComponent } from './productcomponent/product/viewdetails/viewdetails.component';
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
//import { OrderComponent } from './productcomponent/viewmodel/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    HighlightDirective,
    OrderMasterComponent,
    OrderdetailComponent,
    InsertOrderComponent,
    ProductMasterPageComponent,
    ProductDetailsComponent,
    InsertProductComponent,
    UpdateProductComponent,
    ViewdetailsComponent,
    EmployeemasterComponent,
    EmployeeDetailsComponent,
    InsertEmployeeComponent,
    UpdateEmployeeComponent,
    CustomerMasterComponent,
    CustomerDetailsComponent,
    InsertCustomerComponent,
    CategoryMasterComponent,
    CategoryDetailComponent,
    InsertCategoryComponent,
    UpdateCategoryComponent,
    LoginAdminComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
