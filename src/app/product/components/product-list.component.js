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
var category_service_1 = require('../services/category.service');
var cart_service_1 = require('../../cart/services/cart.service');
var angular2_toaster_1 = require('angular2-toaster');
var ProductListComponent = (function () {
    function ProductListComponent(_productService, _categoryService, _cart, _toasterService) {
        this._productService = _productService;
        this._categoryService = _categoryService;
        this._cart = _cart;
        this._toasterService = _toasterService;
        this.searchterm = '';
        this.loadingProducts = true;
        this.loadingCategories = true;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.getProducts();
    };
    ProductListComponent.prototype.getCategories = function () {
        var _this = this;
        this.loadingCategories = true;
        this._categoryService.getList().subscribe(function (res) {
            _this.categoryResponse = res;
            _this.loadingCategories = false;
        });
    };
    ProductListComponent.prototype.getProducts = function () {
        var _this = this;
        this.loadingProducts = true;
        this._productService.getList().subscribe(function (res) {
            _this.productsResponse = res;
            _this.loadingProducts = false;
        });
    };
    ProductListComponent.prototype.addToCart = function (product) {
        var _this = this;
        this._cart.add(product.id, {}).subscribe(function (res) {
            _this._toasterService.pop('success', 'Added To Cart', product.title);
        });
    };
    ProductListComponent.prototype.search = function (searchTerm) {
        var _this = this;
        this.loadingProducts = true;
        var params = {};
        if (typeof this.currentCategory !== 'undefined') {
            var field = 'category';
            params[field] = this.currentCategory.id;
        }
        if (searchTerm !== '') {
            var field = 'search';
            params[field] = searchTerm;
        }
        this._productService.getList(params).subscribe(function (res) {
            _this.productsResponse = res;
            _this.loadingProducts = false;
        });
    };
    ProductListComponent.prototype.searchKeyPressed = function ($event) {
        if ($event.keyCode === 13) {
            this.search($event.target.value);
        }
    };
    ProductListComponent.prototype.activateCategory = function (cat) {
        if (cat === null) {
            this.currentCategory = undefined;
            this.search(this.searchterm);
        }
        else {
            this.currentCategory = cat;
            this.search(this.searchterm);
        }
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'as-product-detail',
            templateUrl: 'app/product/templates/product-list.html',
            styleUrls: [
                'app/product/styles/product-list.css'
            ]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, category_service_1.CategoryService, cart_service_1.CartService, angular2_toaster_1.ToasterService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map