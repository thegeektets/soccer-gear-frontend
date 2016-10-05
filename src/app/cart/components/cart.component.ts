import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import {Product} from '../../product/models/product';


@Component({
    selector: 'as-cart',
    templateUrl: 'app/cart/templates/cart.html',
    styleUrls: [
        'app/cart/styles/cart.css'
    ]
})

export class CartComponent implements OnInit {
    public currentCart;

    constructor(
        private _cart: CartService
    ) {
    }
    ngOnInit() {
        this.currentCart = this._cart.fetchCart();
    }
    addToCart(product: Product) {
        this._cart.add(product);
    }
    removeFromCart(product: Product) {
        this._cart.remove(product);
    }
    deleteFromCart(product: Product) {
        this._cart.delete(product);
    }
}
