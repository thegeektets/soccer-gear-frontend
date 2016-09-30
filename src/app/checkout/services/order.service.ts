import { Injectable } from '@angular/core';
import { BaseService } from '../../bases/services/BaseService';
import { Http, Response } from '@angular/http';
import { HttpSettingsService } from '../../services/HttpSettingsService';
import { ListResponse } from '../../bases/models/ListResponse';
import {Order} from '../models/order';

@Injectable()

export class OrderService extends BaseService {

    public _basePath = 'orders/';

    constructor(public http: Http, public _httpSettings: HttpSettingsService) {
        super(http, _httpSettings);
    }

    listMap(res: Response): ListResponse {
        let toReturn = <ListResponse>res.json();
        for (let num in toReturn.results) {
            if (toReturn.results.hasOwnProperty(num)) {
                toReturn.results[num] = new Order(toReturn.results[num]);
            }
        }
        return toReturn;
    }

    singleMap(res: Response): Order {
        return new Order(res.json());
    }

}
