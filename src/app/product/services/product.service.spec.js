"use strict";
var testing_1 = require('@angular/router/testing');
var testing_2 = require('@angular/core/testing');
var router_1 = require('@angular/router');
var product_service_1 = require('./product.service');
var http_1 = require('@angular/http');
var HttpSettingsService_1 = require('../../services/HttpSettingsService');
var SessionService_1 = require('../../services/SessionService');
var SettingsService_1 = require('../../services/SettingsService');
var AuthToken_1 = require('../../services/AuthToken');
var config = [];
describe('ProductService', function () {
    beforeEach(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [],
            imports: [
                testing_1.RouterTestingModule,
                router_1.RouterModule,
                http_1.HttpModule,
            ],
            providers: [
                router_1.provideRoutes(config),
                product_service_1.ProductService,
                SessionService_1.SessionService,
                SettingsService_1.SettingsService,
                AuthToken_1.AuthToken,
                HttpSettingsService_1.HttpSettingsService
            ]
        });
    });
    it('should have a _basePath that is defined', testing_2.async(function () {
        testing_2.inject([product_service_1.ProductService], function (_productService) {
            expect(_productService._basePath).toBeDefined();
        });
    }));
    it('should have a _basePath that is not blank', testing_2.inject([product_service_1.ProductService], function (_productService) {
        expect(_productService._basePath !== '').toBeTruthy();
    }));
    it('should have a _basePath that ends with a "/"', testing_2.inject([product_service_1.ProductService], function (_productService) {
        expect(_productService._basePath.charAt(_productService._basePath.length - 1) === '/').toBeTruthy();
    }));
    it('should return an observable from .getList method', testing_2.async(function () {
        testing_2.inject([product_service_1.ProductService], function (_productService) {
            var o = _productService.getList();
            console.log(o);
            expect(o.subscribe).toBeDefined();
        });
    }));
    it('should return an observable from .get method', testing_2.async(function () {
        testing_2.inject([product_service_1.ProductService], function (_productService) {
            var o = _productService.get('1');
            console.log(o);
            expect(o.subscribe).toBeDefined();
        });
    }));
});
//# sourceMappingURL=product.service.spec.js.map