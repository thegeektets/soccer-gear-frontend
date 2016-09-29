import {Injectable} from '@angular/core';
import {BaseService} from '../../bases/services/BaseService';
import {Http, Response, RequestOptionsArgs, URLSearchParams, Headers} from '@angular/http';
import {HttpSettingsService} from '../../services/HttpSettingsService';
import {ListResponse} from '../../bases/models/ListResponse';
import {Observable} from 'rxjs/Rx';
import {AuthToken} from '../../services/AuthToken';
import {SessionService} from '../../services/SessionService';
import {User} from '../models/user';

@Injectable()

export class UserService extends BaseService {

    public _basePath = 'auth/user/';

    constructor(public http: Http,
                public _httpSettings: HttpSettingsService,
                public _sessionService: SessionService,
                private _authToken: AuthToken
    ) {
        super(http, _httpSettings);
    }

    listMap(res: Response): ListResponse {
        let toReturn = <ListResponse>res.json();
        for (let num in toReturn.results) {
            if (toReturn.results.hasOwnProperty(num)) {
                toReturn.results[num] = new User(toReturn.results[num]);
            }
        }
        return toReturn;
    }

    singleMap(res: Response): User {
        return new User(res.json());
    }



}
