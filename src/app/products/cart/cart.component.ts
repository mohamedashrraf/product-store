import { Component } from '@angular/core';
// import { AddtocartService } from '../services/addtocart.service';
// import { ProductHttpService } from '../services/product-http.service';
// import { CartCountService } from '../services/cart-count.service';
// import { Observable } from 'rxjs';
// import { Product } from 'src/app/interfaces/product';
// import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  cartProducts: any[] = []
  totalPrice: any = 0
  activeId: string = '';
  counter = 1;
  isCartEmpty: boolean = false;



  // constructor(private activeRoute: ActivatedRoute, private productService: ProductHttpService, private router: Router, private addCartService: AddtocartService, private cartCount: CartCountService) {
  // }


  ngOnInit() {

    this.getCartProducts();
  }

  getCartProducts() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      console.log(this.cartProducts);
    }
    this.gettotalPrice()
  }

  increment(i: number) {
    this.cartProducts[i].quantity++;
    this.gettotalPrice();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));

  }

  decrement(i: number) {

    if (this.cartProducts[i].quantity > 1) {
      this.cartProducts[i].quantity--;
      this.gettotalPrice();
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));

    }
  }

  removeFromCart(i: number) {
    this.cartProducts.splice(i, 1);
    this.gettotalPrice();

    localStorage.setItem("cart", JSON.stringify(this.cartProducts));

  }

  clearCart() {
    this.cartProducts = [];
    this.gettotalPrice();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.isCartEmpty = true;
  }

  gettotalPrice() {
    this.totalPrice = 0;
    for (let i in this.cartProducts) {
      this.totalPrice += this.cartProducts[i].item.price * this.cartProducts[i].quantity;
    }
  }



}
