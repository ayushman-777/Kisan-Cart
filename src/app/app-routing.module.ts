import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SellerFormComponent} from './seller-form/seller-form.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {LoginComponent} from './login/login.component';
import {ProductsComponent} from './products/products.component';
import {SignUpComponent} from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'seller-form', component: SellerFormComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'buy', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SellerFormComponent, AboutUsComponent, ProductsComponent];
