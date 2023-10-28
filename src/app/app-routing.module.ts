import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { CartComponent } from './cart/cart.component';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
 
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'market',
    component:MarketComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'addUser',
    component:AddUserComponent
  },
  {
    path:'addProduct',
    component:AddProductComponent
  },
  {
    path:'viewProduct',
    component:ViewProductComponent
  },
  {
    path:'viewUser',
    component:ViewUserComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
