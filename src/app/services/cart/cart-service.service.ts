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
    // Test if the product exist in the order list
    if(this.orderList.filter(o => o.product.id == order.product.id).length == 0 ){
      this.orderList.push(order);
    }else{
      // We add the new quantity to the existing order
      let existing_order:Order = this.orderList.filter(o => o.product.id == order.product.id)[0];
      existing_order.quantity =  Number(existing_order.quantity) + Number(order.quantity);
    }
    // this.orderList.push(order);
    
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
