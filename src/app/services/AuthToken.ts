import {Injectable} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class AuthToken {

    constructor(private _cookieService: CookieService) {
        //
    }

    public getToken() {
        // return this._cookieService.get('auth-token');
        return localStorage.getItem('auth-token');
    }

    public setToken(token: string) {
        return localStorage.setItem('auth-token', token);
        // return this._cookieService.put('auth-token', token);
    }

    public clearToken() {
        return localStorage.removeItem('auth-token');
        // return this._cookieService.remove('auth-token');
    }


}
