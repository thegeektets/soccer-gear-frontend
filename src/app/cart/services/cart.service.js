"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var BaseService_1 = require('../../bases/services/BaseService');
var http_1 = require('@angular/http');
var HttpSettingsService_1 = require('../../services/HttpSettingsService');
var cart_1 = require('../models/cart');
var uuid_1 = require('../../utils/uuid');
var localstorage_service_1 = require('../../services/localstorage.service');
var CartService = (function (_super) {
    __extends(CartService, _super);
    function CartService(http, _httpSettings, _localStorage) {
        _super.call(this, http, _httpSettings);
        this.http = http;
        this._httpSettings = _httpSettings;
        this._localStorage = _localStorage;
        this._basePath = 'cart/';
        this.createNewSession();
    }
    CartService.prototype.createNewSession = function () {
        this.cartSession = this._localStorage.retrieve('cartSession', uuid_1.UUID.UUID());
        this._localStorage.store('cartSession', this.cartSession);
    };
    CartService.prototype.clearSession = function () {
        this.cartSession = undefined;
        this.singleObject = new cart_1.Cart({});
        this.singleO.emit(new cart_1.Cart({}));
        this._localStorage.remove('cartSession');
    };
    CartService.prototype.listMap = function (res) {
        var toReturn = res.json();
        for (var num in toReturn.results) {
            if (toReturn.results.hasOwnProperty(num)) {
                toReturn.results[num] = new cart_1.Cart(toReturn.results[num]);
            }
        }
        return toReturn;
    };
    CartService.prototype.singleMap = function (res) {
        return new cart_1.Cart(res.json());
    };
    CartService.prototype.getList = function (params) {
        var _this = this;
        if (typeof params === 'undefined') {
            params = {};
        }
        var paramName = 'session';
        params[paramName] = this.cartSession;
        var options = this.makeOptions(params);
        console.log(this.getUrl() + 'my_cart/');
        return this.http.get(this.getUrl() + 'my_cart/', options)
            .map(function (res) {
            var toReturn = _this.singleMap(res);
            _this.singleObject = toReturn;
            _this.singleO.emit(toReturn);
            return toReturn;
        })
            .catch(this.handleError);
    };
    CartService.prototype.add = function (product_id, chosen_attributes, params) {
        var _this = this;
        var data = {
            product_id: product_id,
            chosen_attributes: chosen_attributes,
            session: this.cartSession
        };
        var options = this.makeOptions(params);
        return this.http.post(this.getUrl() + 'my_cart/add_item/', JSON.stringify(data), options)
            .map(function (res) {
            var toReturn = _this.singleMap(res);
            _this.singleObject = toReturn;
            _this.singleO.emit(toReturn);
            return toReturn;
        })
            .catch(this.handleError);
    };
    CartService.prototype.setQuantity = function (cart_item_id, quantity, params) {
        var _this = this;
        var data = {
            cart_item_id: cart_item_id,
            quantity: quantity,
            session: this.cartSession
        };
        var options = this.makeOptions(params);
        return this.http.post(this.getUrl() + 'my_cart/set_quantity/', JSON.stringify(data), options)
            .map(function (res) {
            var toReturn = _this.singleMap(res);
            _this.singleObject = toReturn;
            _this.singleO.emit(toReturn);
            return toReturn;
        })
            .catch(this.handleError);
    };
    CartService.prototype.remove = function (cart_item_id, params) {
        var _this = this;
        var data = {
            cart_item_id: cart_item_id,
            session: this.cartSession
        };
        var options = this.makeOptions(params);
        return this.http.post(this.getUrl() + 'my_cart/remove_item/', JSON.stringify(data), options)
            .map(function (res) {
            var toReturn = _this.singleMap(res);
            _this.singleObject = toReturn;
            _this.singleO.emit(toReturn);
            return toReturn;
        })
            .catch(this.handleError);
    };
    CartService.prototype.makeOptions = function (params) {
        var options = {
            headers: this._httpSettings.getHeaders(),
            search: new http_1.URLSearchParams(this.makeStringOfParams(params))
        };
        return options;
    };
    CartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, HttpSettingsService_1.HttpSettingsService, localstorage_service_1.LocalStorageService])
    ], CartService);
    return CartService;
}(BaseService_1.BaseService));
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map