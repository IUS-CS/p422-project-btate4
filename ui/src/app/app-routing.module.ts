import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsScreenComponent } from './pages/products-screen/products-screen.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { CartComponent } from './pages/cart/cart.component';


const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  { path: 'log-in', component: LoginScreenComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'products', component: ProductsScreenComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ProductsScreenComponent, ProfilePageComponent, CartComponent, LoginScreenComponent];
