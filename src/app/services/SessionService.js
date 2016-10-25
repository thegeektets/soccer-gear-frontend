"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var SettingsService_1 = require('./SettingsService');
var AuthToken_1 = require('./AuthToken');
var router_1 = require('@angular/router');
var SessionService = (function () {
    function SessionService(_http, _settings, _authToken, _router) {
        this._http = _http;
        this._settings = _settings;
        this._authToken = _authToken;
        this._router = _router;
        this.authStatus = new core_1.EventEmitter();
        this.userObservable = new core_1.EventEmitter();
        this._basePath = 'api-token-auth/';
        this._apiVersion = '1';
    }
    SessionService.prototype.getToken = function () {
        return this._authToken.getToken();
    };
    SessionService.prototype.logout = function () {
        var toReturn = this._authToken.clearToken();
        this.actionLoggedOut();
        return toReturn;
    };
    SessionService.prototype.actionLoggedIn = function () {
        this.authStatus.emit({
            'authenticated': this.isLoggedIn()
        });
        this._router.navigate(['/']);
    };
    SessionService.prototype.actionLoggedOut = function () {
        this.authStatus.emit({
            'authenticated': this.isLoggedIn()
        });
        this._router.navigate(['/']);
    };
    SessionService.prototype.isLoggedIn = function () {
        if (this.getToken() != null) {
            return true;
        }
        else {
            return false;
        }
    };
    SessionService.prototype.setUser = function (user) {
        this.user = user;
        if (user !== null) {
            this.userObservable.emit(user);
        }
    };
    SessionService.prototype.handleError = function (error) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        var toReturn;
        if (typeof error.json().non_field_errors !== 'undefined') {
            toReturn = Observable_1.Observable.throw(error.json().non_field_errors[0]);
        }
        else {
            toReturn = Observable_1.Observable.throw('Server error');
        }
        return toReturn;
    };
    SessionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, SettingsService_1.SettingsService, AuthToken_1.AuthToken, router_1.Router])
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=SessionService.js.map