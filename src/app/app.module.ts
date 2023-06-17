import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductsComponent } from './components/products/products.component';

import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayAllProductsComponent } from './components/display-all-products/display-all-products.component';
import { LoginComponent } from './components/login/login.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { DisplayAllProductsTableComponent } from './components/display-all-products-table/display-all-products-table.component';
import { DisplayOneProductComponent } from './components/display-one-product/display-one-product.component';
import { SearchProductByNamePriceComponent } from './components/search-product-by-name-price/search-product-by-name-price.component';
import { DealComponent } from './components/deal/deal.component';
import { DealsOfTheWeakComponent } from './components/deals-of-the-weak/deals-of-the-weak.component';
import { ConsonneMajPipe } from './pipes/consonne-maj.pipe';









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ProductsComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    DisplayAllProductsComponent,
    LoginComponent,
    AddProductComponent,
    UserDashboardComponent,
    DisplayAllProductsTableComponent,
    DisplayOneProductComponent,
    SearchProductByNamePriceComponent,
    DealComponent,
    DealsOfTheWeakComponent,
    ConsonneMajPipe,
  
   
    
   
   
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
