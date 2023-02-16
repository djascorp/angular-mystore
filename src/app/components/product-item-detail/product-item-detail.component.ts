import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/types/product';
import { Order } from 'src/app/types/order';
import { ApiService } from 'src/app/services/api/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart-service.service';

@Component({
  selector: 'product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {
  product: Product|undefined;
  quantity: number = 1;
  
  @Output() onClickAdd: EventEmitter<Order> = new EventEmitter();


  constructor(private api: ApiService, private route: ActivatedRoute, private cart: CartService){}

  ngOnInit(): void {
    this.api.fetchProduits().subscribe((data) => {
      this.product = data.filter(product => product.id == Number(this.route.snapshot.paramMap.get('product_id')) )[0]
      console.log(this.product)
    })
  }

  public addToCard(){
    this.cart.pushOrder({ quantity: this.quantity, product: this.product! })
    alert("Added to cart")
  }

}
