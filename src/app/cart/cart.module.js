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
var app_providers_1 = require('../app.providers');
var router_1 = require('@angular/router');
var cart_component_1 = require('./components/cart.component');
var common_1 = require('@angular/common');
var loading_module_1 = require('../directives/Loading/loading.module');
var forms_1 = require('@angular/forms');
var CartModule = (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        core_1.NgModule({
            declarations: [
                cart_component_1.CartComponent
            ],
            imports: [
                common_1.CommonModule,
                loading_module_1.LoadingModule,
                router_1.RouterModule,
                forms_1.FormsModule
            ],
            exports: [
                cart_component_1.CartComponent
            ],
            providers: [app_providers_1.APP_PROVIDERS],
        }), 
        __metadata('design:paramtypes', [])
    ], CartModule);
    return CartModule;
}());
exports.CartModule = CartModule;
//# sourceMappingURL=cart.module.js.map