import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
// import prodList from '../../../assets/products-list.json';
import { ProductHttpService } from '../services/product-http.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent {

  activeId : string='';
  // products: Product[] = prodList;
  foundProduct: Product | undefined;

  constructor(private activeRoute: ActivatedRoute, private productService: ProductHttpService, private router : Router) { }
  ngOnInit(){
    this.activeId = this.activeRoute.snapshot.params["id"];
    // console.log("ID:", this.activeId);
    // console.log(this.activeRoute.snapshot.params["id"]);

    // this.foundProduct = this.products.find((product) => product.id === +this.activeId);

    this.productService.getProductDetails(this.activeId).subscribe((res) => this.foundProduct = res,
      (error) => {
        console.log(error);
        if(error.status === 404) {
          this.router.navigate(['/'])
        }
      })
  }

}
