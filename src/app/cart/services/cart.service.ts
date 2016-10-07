import {OnInit, Injectable, EventEmitter } from '@angular/core';
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
    public cartUpdated: EventEmitter<any> = new EventEmitter();

    constructor(private _storage: LocalStorageService) {}


    public add(product: Product) {
        this._cartItem = {'product': product, 'quantity': 1, 'cost': product.price};

        if (this.fetchCart() !== null && this.fetchCart().length !== 0) {
            this.cartItems = this.fetchCart();
            this.productExists = false;
            for (let item of this.cartItems) {
               if (item.product.id === this._cartItem.product.id ) {
                    item.quantity++ ;
                    item.cost = (item.quantity * item.product.price);
                    this.productExists = true;
                }
            }
            console.log(this.productExists);

            if (this.productExists === false) {
                  this.cartItems.push(this._cartItem);
            }
        } else {
            this.cartItems.push(this._cartItem);
        }
        this._storage.store('Cart', this.cartItems);
        this.updateCartInTemplates();
    }
    public remove(product: Product) {
        this._cartItem = {'product': product, 'quantity': 1, 'cost': product.price};
        if (this.fetchCart() !== null) {
            this.cartItems = this.fetchCart();
            let index = 0;
            for (let item of this.cartItems) {
                if (item.product.id === this._cartItem.product.id ) {
                    item.quantity-- ;
                    console.log(item.quantity);
                    if (item.quantity < 1 ) {
                       this.cartItems.splice(index, 1);
                    } else {
                        item.cost = (item.quantity * item.product.price);
                    }
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
        this.updateCartInTemplates();
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
        this.updateCartInTemplates();
    }

    public fetchCart() {
        return this._storage.retrieve('Cart');
    }

    public updateCartInTemplates() {
        let totalq = 0;
        let cartitems = [];
        if (this.fetchCart() !== null) {
            cartitems = this.fetchCart();
        }
        if (cartitems.length > 0 ) {
            for (let item of cartitems) {
                totalq += item.quantity;
            }
        }
        this.cartUpdated.emit(' Items: ' + cartitems.length + ' Quantity: ' + totalq + ' ');
    }

}
