import { Injectable } from '@angular/core';
import { BaseService } from '../../bases/services/BaseService';
import {Http, Response, RequestOptionsArgs, URLSearchParams, Headers} from '@angular/http';
import { HttpSettingsService } from '../../services/HttpSettingsService';
import { ListResponse } from '../../bases/models/ListResponse';
import {Observable} from 'rxjs/Rx';
import {Payment} from '../models/payment';

@Injectable()

export class PaymentService extends BaseService {

    public _basePath = 'payments/';
    public _requestPath = 'checkout/request_payment/';

    constructor(public http: Http, public _httpSettings: HttpSettingsService) {
        super(http, _httpSettings);
    }

    listMap(res: Response): ListResponse {
        let toReturn = <ListResponse>res.json();
        for (let num in toReturn.results) {
            if (toReturn.results.hasOwnProperty(num)) {
                toReturn.results[num] = new Payment(toReturn.results[num]);
            }
        }
        return toReturn;
    }

    singleMap(res: Response): Payment {
        return new Payment(res.json());
    }

    public requestPayment(data, params?): Observable<any> {
        let options: RequestOptionsArgs = {
            headers: this._httpSettings.getUnauthorizedHeaders(),
            search: new URLSearchParams(this.makeStringOfParams(params))
        };
        return this.http.post(this.getUrl(this._requestPath), data, options)
            .map(res => {
                let toReturn = <any>this.singleMap(res);
                this.singleObject = toReturn;
                this.singleO.emit(toReturn);
                return toReturn;
            })
            .catch(this.handleError);
    }

}
