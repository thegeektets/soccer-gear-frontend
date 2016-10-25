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
var product_service_1 = require('../services/product.service');
var product_1 = require('../models/product');
var router_1 = require('@angular/router');
var cart_service_1 = require('../../cart/services/cart.service');
var angular2_toaster_1 = require('angular2-toaster');
var SessionService_1 = require('../../services/SessionService');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_productService, _activatedRoute, _cart, _sessionService, _toasterService) {
        var _this = this;
        this._productService = _productService;
        this._activatedRoute = _activatedRoute;
        this._cart = _cart;
        this._sessionService = _sessionService;
        this._toasterService = _toasterService;
        this.productUpdates = {};
        this.loading = true;
        this.chosen_attributes = {};
        this.showSave = false;
        this._activatedRoute.params.subscribe(function (res) {
            if (res.hasOwnProperty('id')) {
                _this.getProducts(res.id);
            }
        });
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        // this.product = this._productService.ge
    };
    ProductDetailComponent.prototype.getProducts = function (id) {
        var _this = this;
        this._productService.get(id).subscribe(function (res) {
            _this.product = res;
            _this.loading = false;
        });
    };
    ProductDetailComponent.prototype.addToCart = function (product) {
        var _this = this;
        this._cart.add(product.id, this.chosen_attributes).subscribe(function (res) {
            _this._toasterService.pop('success', 'Added To Cart', product.title);
        });
    };
    ProductDetailComponent.prototype.productChanged = function ($event, field) {
        if (this._sessionService.user !== null) {
            if (this._sessionService.user.is_admin ||
                this._sessionService.user.is_staff ||
                this._sessionService.user.is_superuser) {
                this.showSave = true;
                // console.log(field, $event.target.innerHTML);
                this.productUpdates[field] = $event.target.innerHTML;
            }
        }
    };
    ProductDetailComponent.prototype.saveChanges = function () {
        var _this = this;
        if (this._sessionService.user !== null) {
            if (this._sessionService.user.is_admin ||
                this._sessionService.user.is_staff ||
                this._sessionService.user.is_superuser) {
                this.loading = true;
                var prod = new product_1.Product(this.product);
                for (var field in this.productUpdates) {
                    if (this.productUpdates.hasOwnProperty(field)) {
                        prod[field] = this.productUpdates[field].replace(/style=".*?"/ig, '');
                    }
                }
                this._productService.put(prod.id, JSON.stringify(prod)).subscribe(function (res) {
                    _this.loading = false;
                    _this.product = res;
                    _this.showSave = false;
                    _this._toasterService.pop('success', 'Saved changes', _this.product.title);
                });
            }
        }
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'as-product-detail',
            templateUrl: 'app/product/templates/product-detail.html',
            styleUrls: [
                'app/product/styles/product-detail.css'
            ]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.ActivatedRoute, cart_service_1.CartService, SessionService_1.SessionService, angular2_toaster_1.ToasterService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map