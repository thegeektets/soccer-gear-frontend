import { Injectable } from '@angular/core';
import { BaseService } from '../../bases/services/BaseService';
import { Http, Response } from '@angular/http';
import { HttpSettingsService } from '../../services/HttpSettingsService';
import { ListResponse } from '../../bases/models/ListResponse';
import {OrderItem} from '../models/order_item';

@Injectable()

export class OrderItemService extends BaseService {

    public _basePath = 'order/items/';

    constructor(public http: Http, public _httpSettings: HttpSettingsService) {
        super(http, _httpSettings);
    }

    listMap(res: Response): ListResponse {
        let toReturn = <ListResponse>res.json();
        for (let num in toReturn.results) {
            if (toReturn.results.hasOwnProperty(num)) {
                toReturn.results[num] = new OrderItem(toReturn.results[num]);
            }
        }
        return toReturn;
    }

    singleMap(res: Response): OrderItem {
        return new OrderItem(res.json());
    }

}
