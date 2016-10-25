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
var shared_1 = require('./shared');
var SessionService_1 = require('./services/SessionService');
var router_1 = require('@angular/router');
var user_service_1 = require('./Account/services/user.service');
var cart_service_1 = require('./cart/services/cart.service');
var cart_1 = require('./cart/models/cart');
var angular2_toaster_1 = require('angular2-toaster');
var AppComponent = (function () {
    function AppComponent(_sessionService, _router, _activatedRoute, _applicationRef, _userService, _cart) {
        var _this = this;
        this._sessionService = _sessionService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._applicationRef = _applicationRef;
        this._userService = _userService;
        this._cart = _cart;
        this.userDisplayName = '';
        this.cart = new cart_1.Cart({});
        this.isAuthenticated = false;
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            showCloseButton: true,
            tapToDismiss: true,
            timeout: 5000,
            positionClass: 'toast-bottom-left'
        });
        this.isAuthenticated = this._sessionService.isLoggedIn();
        this.appBrand = shared_1.CONSTANTS.MAIN.APP.BRAND;
        if (this.isAuthenticated) {
            this.getUser();
        }
        this._sessionService.authStatus.subscribe(function (obj) {
            _this.isAuthenticated = _this._sessionService.isLoggedIn();
            if (_this.isAuthenticated) {
                _this.getUser();
                _this._cart.getList().subscribe(function (res) {
                    _this.cart = res;
                });
            }
            else {
                _this._sessionService.setUser(null);
                _this._cart.clearSession();
                _this._cart.createNewSession();
            }
        });
        // checks if the user is logged in
        this._router.events.subscribe(function (nextValue) {
            if (nextValue.url !== '/auth/login' &&
                nextValue.url !== '/account/register' &&
                nextValue.url !== '/password/reset' &&
                nextValue.url !== '/password/reset/done' &&
                nextValue.url !== '/auth/forgot-password' &&
                nextValue.url !== '/cart' &&
                nextValue.url !== '/products' &&
                !nextValue.url.match(/^\/product\/.*?$/) &&
                nextValue.url !== '/' &&
                !nextValue.url.match(/^\/auth\/forgot\-password\//)) {
                if (!_this.isAuthenticated) {
                    _this._router.navigate(['/auth/login']);
                }
            }
            _this._applicationRef.tick();
            setTimeout(function () {
                _this._applicationRef.tick();
            }, 100);
            setTimeout(function () {
                _this._applicationRef.tick();
            }, 300);
            setTimeout(function () {
                _this._applicationRef.tick();
            }, 500);
            setTimeout(function () {
                _this._applicationRef.tick();
            }, 700);
        });
        this._cart.getList().subscribe(function (res) {
            _this.cart = res;
            _this._cart.singleO.subscribe(function (res2) {
                _this.cart = res2;
            });
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        //
    };
    AppComponent.prototype.getUser = function () {
        var _this = this;
        this._userService.get('current_user').subscribe(function (res) {
            _this._sessionService.setUser(res);
            if (_this._sessionService.user.full_name === '') {
                _this.userDisplayName = _this._sessionService.user.getName();
            }
            else {
                _this.userDisplayName = _this._sessionService.user.full_name;
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'as-main-app',
            templateUrl: 'app/app.html'
        }), 
        __metadata('design:paramtypes', [SessionService_1.SessionService, router_1.Router, router_1.ActivatedRoute, core_1.ApplicationRef, user_service_1.UserService, cart_service_1.CartService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map