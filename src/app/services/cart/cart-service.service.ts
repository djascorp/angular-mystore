import { Injectable } from '@angular/core';
import { Order } from 'src/app/types/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  orderList: Array<Order> = [];
  constructor() { }

  public pushOrder(order: Order){
    this.orderList.push(order);
  }
}
