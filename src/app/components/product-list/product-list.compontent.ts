import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api-service.service';
import { CartService } from 'src/app/services/cart/cart-service.service';
import { Order } from 'src/app/types/order';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private api: ApiService,private cart: CartService){}

  ngOnInit(): void {
    this.loadProduct()
  }

  private loadProduct() {
    this.api.fetchProduits().subscribe((data) => {
      console.log(data);
      this.products = data;
    })
  }

  public addToCard(order: Order){
    console.log("Commande ",order)
    this.cart.pushOrder(order);
    alert("Added to cart")
  }
}
