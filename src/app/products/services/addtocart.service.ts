import { Injectable } from '@angular/core';
import { BehaviorSubject ,Observable} from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  cartProducts: any[] = [];




}
