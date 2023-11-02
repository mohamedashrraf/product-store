import { Component } from '@angular/core';
// import prodList from '../../../assets/products-list.json';
import { Product } from '../../interfaces/product';
import {ProductHttpService}from '../services/product-http.service'

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent {
  // products: Product[] = prodList;
  products: any;
  cartProducts: any[] = [];
  constructor(private productService: ProductHttpService){}

  ngOnInit(){
    this.productService.getProductList().subscribe((data) => this.products = data.products)
  }

  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProducts.find(item => item.item.id == event.item.id);
      if (exist) {
        console.log("already exist");
      } else {
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    }
  }
}
