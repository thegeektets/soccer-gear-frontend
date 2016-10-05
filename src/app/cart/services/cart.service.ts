import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpSettingsService} from '../../services/HttpSettingsService';
import {LocalStorageService} from 'ng2-webstorage';
import {Product} from '../../product/models/product';
import {CartItem} from '../models/cart';

@Injectable()

export class CartService {
    public cartItems = [];
    public _cartItem: CartItem;
    public productExists = false;
    constructor(private _storage: LocalStorageService) {}

    public add(product: Product) {
        this._cartItem = {'product': product, 'quantity': 1, 'cost': product.price};

        if (this.fetchCart() !== null && this.fetchCart().length !== 0) {
            this.cartItems = this.fetchCart();
            for (let item of this.cartItems) {
                if (item.product.id === this._cartItem.product.id ) {
                    item.quantity++ ;
                    item.cost = (item.quantity * item.product.price);
                    this.productExists = true;
                }
            }
            if (this.productExists === false) {
                  this.cartItems.push(this._cartItem);
            }
        } else {
            this.cartItems.push(this._cartItem);
        }
        console.log(this.cartItems);
        this._storage.store('Cart', this.cartItems);
    }
    public remove(product: Product) {
        this._cartItem = {'product': product, 'quantity': 1, 'cost': product.price};
        if (this.fetchCart() !== null) {
            this.cartItems = this.fetchCart();
            for (let item of this.cartItems) {
                if (item.product.id === this._cartItem.product.id ) {
                    item.quantity-- ;
                    item.cost = (item.quantity * item.product.price);
                    this.productExists = true;
                    console.log(item);
                }
            }
            if (this.productExists === false) {
                  this.cartItems.push(this._cartItem);
            }
        } else {
            this.cartItems.push(this._cartItem);
        }

        this._storage.store('Cart', this.cartItems);
    }
    public delete(product: Product) {
        this._cartItem = {'product': product, 'quantity': 1, 'cost': product.price};
        if (this.fetchCart() !== null) {
            this.cartItems = this.fetchCart();
            let index = 0;
            for (let item of this.cartItems) {
                if (item.product.id === this._cartItem.product.id ) {
                    this.cartItems.splice(index, 1);
                    this.productExists = true;
                    console.log(item);
                }
                index++;
            }
            if (this.productExists === false) {
                  this.cartItems.push(this._cartItem);
            }
        } else {
            this.cartItems.push(this._cartItem);
        }

        this._storage.store('Cart', this.cartItems);
    }

    public fetchCart() {
        return this._storage.retrieve('Cart');
    }

}
