import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { CartService } from "src/app/services/cart/cart-service.service";
import { Order } from "src/app/types/order";

@Component({
    selector: 'order-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent  {
    full_name: string = '';
    adress: string = '';
    card_number: string = '';

    constructor(public cart: CartService, private router: Router){}
    


    public onSubmit(form: NgForm){
        if(form.valid){
            this.router.navigate(["/confirmation"],{
                queryParams:{
                    full_name:this.full_name,
                    adress: this.adress,
                    card_number: this.card_number,
                    orders: this.cart.orderList,
                    total: this.cart.totalOrder,
                },
                skipLocationChange: true
            })
        }
    }
    public onChangeAmount(order: Order,index:number){
        if(order.quantity == 0){
            this.cart.removeOrder(index);
            alert("Removed From Order")
        }else{
            this.cart.updateTotalOrder();
        }
    }
   


}