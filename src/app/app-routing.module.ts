import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { CartComponent } from './cart/cart.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:"home" , component:HomeComponent},
  {path:"add-product" , component:AddproductComponent},
  {path:"details/:id" , component:DetailsProductComponent},
  {path:"cart" , component:CartComponent},
  {path:"cart-details" , component:CartDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
