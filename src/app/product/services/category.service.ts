import { Injectable } from '@angular/core';
import { BaseService } from '../../bases/services/BaseService';
import {Http, Response, RequestOptionsArgs, URLSearchParams} from '@angular/http';
import { HttpSettingsService } from '../../services/HttpSettingsService';
import { ListResponse } from '../../bases/models/ListResponse';
import {Category} from '../models/category';
import {Observable} from 'rxjs';

@Injectable()

export class CategoryService extends BaseService {

    public _basePath = 'categories/';

    constructor(public http: Http, public _httpSettings: HttpSettingsService) {
        super(http, _httpSettings);
    }

    listMap(res: Response): ListResponse {
        let toReturn = <ListResponse>res.json();
        for (let num in toReturn.results) {
            if (toReturn.results.hasOwnProperty(num)) {
                toReturn.results[num] = new Category(toReturn.results[num]);
            }
        }
        return toReturn;
    }

    singleMap(res: Response): Category {
        return new Category(res.json());
    }
    public add(data, params?): Observable<any> {
        let options: RequestOptionsArgs = {
            headers: this._httpSettings.getUnauthorizedHeaders(),
            search: new URLSearchParams(this.makeStringOfParams(params))
        };
        return this.http.post(this.getUrl(this._basePath), data, options)
            .map(res => {
                let toReturn = <any>this.singleMap(res);
                this.singleObject = toReturn;
                this.singleO.emit(toReturn);
                return toReturn;
            })
            .catch(this.handleError);
    }



}
