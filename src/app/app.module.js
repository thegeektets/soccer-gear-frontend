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
var app_providers_1 = require('./app.providers');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var shared_1 = require('./shared');
var home_module_1 = require('./home/home.module');
var auth_module_1 = require('./Auth/auth.module');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var HttpSettingsService_1 = require('./services/HttpSettingsService');
var SessionService_1 = require('./services/SessionService');
var SettingsService_1 = require('./services/SettingsService');
var auth_service_1 = require('./Auth/services/auth.service');
var AuthToken_1 = require('./services/AuthToken');
var product_module_1 = require('./product/product.module');
var account_module_1 = require('./Account/account.module');
var cart_module_1 = require('./cart/cart.module');
var checkout_module_1 = require('./checkout/checkout.module');
var cart_service_1 = require('./cart/services/cart.service');
var payment_service_1 = require('./checkout/services/payment.service');
var order_service_1 = require('./checkout/services/order.service');
var user_service_1 = require('./Account/services/user.service');
var forms_1 = require('@angular/forms');
var localstorage_service_1 = require('./services/localstorage.service');
var angular2_toaster_1 = require('angular2-toaster');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                auth_module_1.AuthModule,
                account_module_1.AccountModule,
                product_module_1.ProductModule,
                shared_1.NavbarModule,
                home_module_1.HomeModule,
                app_routing_1.routing,
                http_1.HttpModule,
                angular2_toaster_1.ToasterModule,
                platform_browser_1.BrowserModule,
                cart_module_1.CartModule,
                checkout_module_1.CheckoutModule,
                forms_1.FormsModule
            ],
            providers: [
                app_providers_1.APP_PROVIDERS,
                auth_service_1.AuthService,
                AuthToken_1.AuthToken,
                app_routing_1.appRoutingProviders,
                HttpSettingsService_1.HttpSettingsService,
                user_service_1.UserService,
                SessionService_1.SessionService,
                payment_service_1.PaymentService,
                cart_service_1.CartService,
                order_service_1.OrderService,
                SettingsService_1.SettingsService,
                localstorage_service_1.LocalStorageService,
                angular2_toaster_1.ToasterService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map