import { Injectable } from '@angular/core';
import { BaseService } from '../../bases/services/BaseService';
import { Http, Response, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { HttpSettingsService } from '../../services/HttpSettingsService';
import { ListResponse } from '../../bases/models/ListResponse';
import { Cart, CartItem } from '../models/cart';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class CartService extends BaseService {

    public _basePath = 'cart/';

    constructor(public http: Http, public _httpSettings: HttpSettingsService) {
        super(http, _httpSettings);
    }

    listMap(res: Response): ListResponse {
        let toReturn = <ListResponse>res.json();
        for (let num in toReturn.results) {
            if (toReturn.results.hasOwnProperty(num)) {
                toReturn.results[num] = new Cart(toReturn.results[num]);
            }
        }
        return toReturn;
    }
    singleMap(res: Response): Cart {
        return new Cart(res.json());
    }

    public getList(params?): Observable<any> {
        let options: RequestOptionsArgs = {
            headers: this._httpSettings.getHeaders(),
            search: new URLSearchParams(this.makeStringOfParams(params))
        };
        return this.http.get(this.getUrl() + 'my_cart/', options)
            .map(res => {
                console.log(res);
                let toReturn = <any>this.singleMap(res);
                this.singleObject = toReturn;
                this.singleO.emit(toReturn);
                return toReturn;
            })
            .catch(this.handleError);
    }

    public add(product_id: number, chosen_attributes: any, params?) {
        let data = {
            product_id: product_id,
            chosen_attributes: chosen_attributes
        } ;
        let options: RequestOptionsArgs = {
            headers: this._httpSettings.getHeaders(),
            search: new URLSearchParams(this.makeStringOfParams(params))
        };
        return this.http.post(this.getUrl() + 'my_cart/add_item/', JSON.stringify(data), options)
            .map(res => {
                let toReturn = <any>this.singleMap(res);
                this.singleObject = toReturn;
                this.singleO.emit(toReturn);
                return toReturn;
            })
            .catch(this.handleError);
    }

    public setQuantity(cart_item_id: number, quantity: any, params?) {
        let data = {
            cart_item_id: cart_item_id,
            quantity: quantity
        };
        let options: RequestOptionsArgs = {
            headers: this._httpSettings.getHeaders(),
            search: new URLSearchParams(this.makeStringOfParams(params))
        };
        return this.http.post(this.getUrl() + 'my_cart/set_quantity/', JSON.stringify(data), options)
            .map(res => {
                let toReturn = <any>this.singleMap(res);
                this.singleObject = toReturn;
                this.singleO.emit(toReturn);
                return toReturn;
            })
            .catch(this.handleError);
    }

    public remove(cart_item_id: number, params?) {
        let data = {
            cart_item_id: cart_item_id
        };
        let options: RequestOptionsArgs = {
            headers: this._httpSettings.getHeaders(),
            search: new URLSearchParams(this.makeStringOfParams(params))
        };
        return this.http.post(this.getUrl() + 'my_cart/remove_item/', JSON.stringify(data), options)
            .map(res => {
                let toReturn = <any>this.singleMap(res);
                this.singleObject = toReturn;
                this.singleO.emit(toReturn);
                return toReturn;
            })
            .catch(this.handleError);
    }

}
