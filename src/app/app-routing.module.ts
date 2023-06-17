import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { DisplayOneProductComponent } from './components/display-one-product/display-one-product.component';
import { SearchProductByNamePriceComponent } from './components/search-product-by-name-price/search-product-by-name-price.component';




const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"signup", component:SignupComponent},
  {path:"login", component:LoginComponent},
  {path:"addProduct", component:AddProductComponent},
  {path:"userDashboard", component:UserDashboardComponent},
  {path:"displayOneProduct/:id", component:DisplayOneProductComponent },
  {path:"searchProductByNamePrice", component:SearchProductByNamePriceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
