import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCountService {


private counter;
  constructor() {
    this.counter = new BehaviorSubject<number>(0);
  }
  getCounterVal() {
    return this.counter.asObservable();
  }

  setCounterVal(newVal: number) {
    this.counter.next(newVal);
  }
}
