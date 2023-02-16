import { Injectable } from '@angular/core';
import { Order } from 'src/app/types/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  orderList: Array<Order> = [];
  totalOrder:Number = 0;
  constructor() { }

  public pushOrder(order: Order){
    this.orderList.push(order);
    this.updateTotalOrder();
  }
  public removeOrder(index:number){
    this.orderList.splice(index,1);
    this.updateTotalOrder();
  }

  public updateTotalOrder(){
    this.totalOrder = this.orderList.reduce((acc,current)=> {
      return acc + current.quantity*current.product.price;
    },0)
  }
}
