import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor(private http: HttpClient) { }

   getProductList(): Observable<any> {
    return this.http.get('https://dummyjson.com/products')
  }

  getProductDetails(id: string): Observable<any> {
  return this.http.get(`https://dummyjson.com/products/${id}`);
}

}
