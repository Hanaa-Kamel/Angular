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
import { ShowProductComponent } from './ordercomponent/show-product/show-product.component';
import { ShowCartComponent } from './ordercomponent/show-cart/show-cart.component';

import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalstorageService } from './ordercomponent/services/localstorage.service';
import { LocalstorageloginService } from './ordercomponent/services/localstoragelogin.service';
import { LoginuserComponent } from './ordercomponent/loginuser/loginuser.component';
import { RegisterComponent } from './ordercomponent/register/register.component';

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
    ShowProductComponent,
    ShowCartComponent,
    LoginuserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule 
    //LocalstorageloginService
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
