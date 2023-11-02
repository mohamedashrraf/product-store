import { Component } from '@angular/core';
import { CartCountService } from 'src/app/products/services/cart-count.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  counter!: number ;
  constructor(private cartService: CartCountService) { }

  ngOnInit(){
    this.cartService.getCounterVal().subscribe((val) => (this.counter = val));
  }

}
