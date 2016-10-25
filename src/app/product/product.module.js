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
var product_detail_component_1 = require('./components/product-detail.component');
var product_service_1 = require('./services/product.service');
var category_service_1 = require('./services/category.service');
var cart_service_1 = require('../cart/services/cart.service');
var product_list_component_1 = require('./components/product-list.component');
var loading_module_1 = require('../directives/Loading/loading.module');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            declarations: [
                product_detail_component_1.ProductDetailComponent,
                product_list_component_1.ProductListComponent
            ],
            imports: [
                common_1.CommonModule,
                loading_module_1.LoadingModule,
                router_1.RouterModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            exports: [
                product_detail_component_1.ProductDetailComponent,
                product_list_component_1.ProductListComponent
            ],
            providers: [
                product_service_1.ProductService,
                category_service_1.CategoryService,
                cart_service_1.CartService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map