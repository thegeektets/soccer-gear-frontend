import { Injectable } from '@angular/core';
import { BaseService } from '../../bases/services/BaseService';
import { Http, Response } from '@angular/http';
import { HttpSettingsService } from '../../services/HttpSettingsService';
import { ListResponse } from '../../bases/models/ListResponse';
import {ProductCategory} from '../models/productcategory';

@Injectable()

export class ProductCategoryService extends BaseService {

    public _basePath = 'product/categories/';

    constructor(public http: Http, public _httpSettings: HttpSettingsService) {
        super(http, _httpSettings);
    }

    listMap(res: Response): ListResponse {
        let toReturn = <ListResponse>res.json();
        for (let num in toReturn.results) {
            if (toReturn.results.hasOwnProperty(num)) {
                toReturn.results[num] = new ProductCategory(toReturn.results[num]);
            }
        }
        return toReturn;
    }

    singleMap(res: Response): ProductCategory {
        return new ProductCategory(res.json());
    }

}
