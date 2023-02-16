import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { Order } from 'src/app/types/order';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input()
  product: Product|undefined;
  quantity: number = 1;
  
  @Output() onClickAdd: EventEmitter<Order> = new EventEmitter();

  public addToCard(){
    console.log("CLICK")
    this.onClickAdd.emit({ quantity: this.quantity, product: this.product! })
  }
}
