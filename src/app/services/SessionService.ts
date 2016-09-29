import {Injectable, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {SettingsService} from './SettingsService';
import {AuthToken} from './AuthToken';
import {Router} from '@angular/router';
// import {UserService} from '../Account/services/user.service';
// import {User} from '../Account/models/user';

@Injectable()
export class SessionService {

    public authStatus: EventEmitter<any> = new EventEmitter();
    // public user: User;

    private _basePath = 'api-token-auth/';
    private _apiVersion = '1';

    constructor(
        private _http: Http,
        private _settings: SettingsService,
        private _authToken: AuthToken,
        private _router: Router
        // private _userService: UserService
    ) {
        /* this.authStatus.subscribe((auth) => {
            if (auth.authenticated === true) {
                this._userService.get('current_user').subscribe((res) => {
                    this.user = res;
                });
            }
            if (auth.authenticated === false) {
                this.user = undefined;
            }
        }); */
    }

    public getToken() {
        return this._authToken.getToken();
    }

    public logout() {
        let toReturn = this._authToken.clearToken();
        this.actionLoggedOut();
        return toReturn;
    }

    public actionLoggedIn() {
        this.authStatus.emit({
            'authenticated': this.isLoggedIn()
        });
        this._router.navigate(['/']);
    }

    public actionLoggedOut() {
        this.authStatus.emit({
            'authenticated': this.isLoggedIn()
        });
        this._router.navigate(['/']);
    }

    public isLoggedIn(): boolean {
        if (this.getToken() != null) {
            return true;
        } else {
            return false;
        }
    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        let toReturn;
        if (typeof error.json().non_field_errors !== 'undefined') {
            toReturn = Observable.throw(error.json().non_field_errors[0]);
        } else {
            toReturn = Observable.throw('Server error');
        }
        return toReturn;
    }



}
