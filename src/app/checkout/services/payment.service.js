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
var payment_1 = require('../models/payment');
var PaymentService = (function (_super) {
    __extends(PaymentService, _super);
    function PaymentService(http, _httpSettings) {
        _super.call(this, http, _httpSettings);
        this.http = http;
        this._httpSettings = _httpSettings;
        this._basePath = 'payments/';
        this._requestPath = 'checkout/request_payment/';
        this._confirmPath = 'checkout/confirm_transaction/';
    }
    PaymentService.prototype.listMap = function (res) {
        var toReturn = res.json();
        for (var num in toReturn.results) {
            if (toReturn.results.hasOwnProperty(num)) {
                toReturn.results[num] = new payment_1.Payment(toReturn.results[num]);
            }
        }
        return toReturn;
    };
    PaymentService.prototype.singleMap = function (res) {
        return new payment_1.Payment(res.json());
    };
    PaymentService.prototype.requestPayment = function (data, params) {
        var _this = this;
        var options = {
            headers: this._httpSettings.getUnauthorizedHeaders(),
            search: new http_1.URLSearchParams(this.makeStringOfParams(params))
        };
        return this.http.post(this.getUrl(this._requestPath), data, options)
            .map(function (res) {
            var toReturn = _this.singleMap(res);
            _this.singleObject = toReturn;
            _this.singleO.emit(toReturn);
            return toReturn;
        })
            .catch(this.handleError);
    };
    PaymentService.prototype.confirmTransaction = function (data, params) {
        var _this = this;
        var options = {
            headers: this._httpSettings.getUnauthorizedHeaders(),
            search: new http_1.URLSearchParams(this.makeStringOfParams(params))
        };
        return this.http.post(this.getUrl(this._confirmPath), data, options)
            .map(function (res) {
            var toReturn = _this.singleMap(res);
            _this.singleObject = toReturn;
            _this.singleO.emit(toReturn);
            return toReturn;
        })
            .catch(this.handleError);
    };
    PaymentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, HttpSettingsService_1.HttpSettingsService])
    ], PaymentService);
    return PaymentService;
}(BaseService_1.BaseService));
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map