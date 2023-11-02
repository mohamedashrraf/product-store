import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartComponent,
    ProductHomeComponent,
    ProductCardComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    FormsModule
  ],

})
export class ProductsModule { }
