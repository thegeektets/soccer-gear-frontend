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
var testing_1 = require('@angular/router/testing');
var testing_2 = require('@angular/core/testing');
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var product_detail_component_1 = require('./product-detail.component');
var http_1 = require('@angular/http');
var app_providers_1 = require('../../app.providers');
var auth_service_1 = require('../../Auth/services/auth.service');
var AuthToken_1 = require('../../services/AuthToken');
var HttpSettingsService_1 = require('../../services/HttpSettingsService');
var user_service_1 = require('../../Account/services/user.service');
var SessionService_1 = require('../../services/SessionService');
var SettingsService_1 = require('../../services/SettingsService');
var product_1 = require('../models/product');
var loading_module_1 = require('../../directives/Loading/loading.module');
var product_service_1 = require('../services/product.service');
var cart_service_1 = require('../../cart/services/cart.service');
var localstorage_service_1 = require('../../services/localstorage.service');
var forms_1 = require('@angular/forms');
var angular2_toaster_1 = require('angular2-toaster');
var TestRouterComponent = (function () {
    function TestRouterComponent() {
    }
    TestRouterComponent = __decorate([
        core_1.Component({
            selector: 'as-test-cmp',
            template: '<div class="title">Hello test</div>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestRouterComponent);
    return TestRouterComponent;
}());
var config = [
    {
        path: '', component: TestRouterComponent
    }
];
describe('ProductDetailComponent', function () {
    beforeEach(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [
                TestRouterComponent,
                product_detail_component_1.ProductDetailComponent
            ],
            imports: [
                testing_1.RouterTestingModule,
                router_1.RouterModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                angular2_toaster_1.ToasterModule,
                loading_module_1.LoadingModule
            ],
            providers: [
                router_1.provideRoutes(config),
                core_1.ApplicationRef,
                angular2_toaster_1.ToasterService,
                app_providers_1.APP_PROVIDERS,
                auth_service_1.AuthService,
                AuthToken_1.AuthToken,
                HttpSettingsService_1.HttpSettingsService,
                user_service_1.UserService,
                SessionService_1.SessionService,
                SettingsService_1.SettingsService,
                product_service_1.ProductService,
                cart_service_1.CartService,
                localstorage_service_1.LocalStorageService
            ]
        });
    });
    var singleFixture = new product_1.Product({
        id: 1,
        title: 'MacBook Air',
        price: '899.99',
        description: 'A really lightweight and awesome notebook.',
        size: '13"',
        color: 'Silver',
        main_image: '',
        images: '',
        video: ''
    });
    it('should have product property', testing_2.async(function () {
        testing_2.TestBed.compileComponents().then(function () {
            var fixture;
            fixture = testing_2.TestBed.createComponent(product_detail_component_1.ProductDetailComponent);
            fixture.componentInstance.product = singleFixture;
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(fixture.componentInstance.product).toBeDefined();
        });
    }));
    it('should say Product Details', testing_2.async(function () {
        testing_2.TestBed.compileComponents().then(function () {
            var fixture;
            fixture = testing_2.TestBed.createComponent(product_detail_component_1.ProductDetailComponent);
            fixture.componentInstance.product = singleFixture;
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h2').innerHTML).toMatch('Product Details');
        });
    }));
});
//# sourceMappingURL=product-detail.component.spec.js.map