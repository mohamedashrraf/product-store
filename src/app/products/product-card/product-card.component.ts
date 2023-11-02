import { Component, EventEmitter, Input, Output } from '@angular/core';
import prodList from '../../../assets/products-list.json';
import { Product } from '../../interfaces/product';
import { Router } from '@angular/router';

import { CartCountService } from '../services/cart-count.service';
import { AddtocartService } from '../services/addtocart.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() prodItem: any ={};
  @Output() item = new EventEmitter();
  counter = 0;
  addButton: Boolean = false;
  quantity:number=0


  constructor(private router: Router, private cartService: CartCountService, private addtocart:AddtocartService) { }

  redirectToDetails(id: number) {
     this.router.navigate(['product-details', id]);
  }

  redirectToCart(id:number) {
     this.router.navigate(['cart',id]);
  }

  addToCart(){
    // this.cartService.setCounterVal(++this.counter);
    // this.addtocart.increaseProductQuantity(productId)
    // this.addtocart.setCart()
    // this.router.navigate(['cart', id]);

    this.item.emit({ item: this.prodItem, quantity: this.quantity });
  }

}
