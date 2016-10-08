import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import {Product} from '../../product/models/product';
import { Cart, CartItem } from '../models/cart';


@Component({
    selector: 'as-cart',
    templateUrl: 'app/cart/templates/cart.html',
    styleUrls: [
        'app/cart/styles/cart.css'
    ]
})

export class CartComponent implements OnInit {
    public cart: Cart;
    public loading: boolean = true;
    public quantityOptions: number[] = [];

    constructor(
        private _cart: CartService
    ) {
        let i = 0;
        while (i < 10) {
            i++;
            this.quantityOptions.push(i);
        }
    }
    ngOnInit() {
        this._cart.getList().subscribe((res) => {
            this.cart = res;
            this.loading = false;
        });
    }
    raiseQuantity(product_id: number, chosen_attributes: any) {
        this._cart.add(product_id, chosen_attributes).subscribe((res) => {
            console.log(res);
            this.cart = res;
        });
    }
    lowerQuantity(cartItem: CartItem) {
        this._cart.setQuantity(cartItem.id, cartItem.quantity - 1).subscribe((res) => {
            this.cart = res;
        });
    }
    removeItem(cartItem: CartItem) {
        this._cart.remove(cartItem.id).subscribe((res) => {
            this.cart = res;
        });
    }
    updateQuantity(newValue: number, cartItem: CartItem) {
        this._cart.setQuantity(cartItem.id, newValue).subscribe((res) => {
            this.cart = res;
        });
    }
}
