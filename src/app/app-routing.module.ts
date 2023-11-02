import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './products/product-home/product-home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './products/cart/cart.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProductHomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'product-details/:id',
    component:ProductDetailsComponent
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
