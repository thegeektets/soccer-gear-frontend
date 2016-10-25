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
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./shared/navbar/navbar.component');
var SessionService_1 = require('./services/SessionService');
var user_service_1 = require('./Account/services/user.service');
var http_1 = require('@angular/http');
var app_providers_1 = require('./app.providers');
var auth_service_1 = require('./Auth/services/auth.service');
var AuthToken_1 = require('./services/AuthToken');
var HttpSettingsService_1 = require('./services/HttpSettingsService');
var SettingsService_1 = require('./services/SettingsService');
var platform_browser_1 = require('@angular/platform-browser');
var cart_service_1 = require('./cart/services/cart.service');
var localstorage_service_1 = require('./services/localstorage.service');
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
describe('AppComponent', function () {
    beforeEach(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [
                TestRouterComponent,
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent
            ],
            imports: [
                testing_1.RouterTestingModule,
                router_1.RouterModule,
                http_1.HttpModule,
                platform_browser_1.BrowserModule
            ],
            providers: [
                router_1.provideRoutes(config),
                core_1.ApplicationRef,
                app_providers_1.APP_PROVIDERS,
                auth_service_1.AuthService,
                AuthToken_1.AuthToken,
                HttpSettingsService_1.HttpSettingsService,
                user_service_1.UserService,
                SessionService_1.SessionService,
                cart_service_1.CartService,
                SettingsService_1.SettingsService,
                localstorage_service_1.LocalStorageService
            ]
        });
    });
    it('should have main app content', testing_2.async(function () {
        testing_2.TestBed.compileComponents().then(function () {
            var fixture;
            fixture = testing_2.TestBed.createComponent(app_component_1.AppComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            // TODO: find a way to compile the routed component
            // expect(compiled.querySelector('div.title')).toMatch('Hello world');
        });
    }));
    it('should show login when not authenticated', testing_2.async(function () {
        testing_2.TestBed.compileComponents().then(function () {
            var fixture;
            fixture = testing_2.TestBed.createComponent(app_component_1.AppComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            expect(compiled.querySelector('ul.navbar-right li a').innerHTML).toMatch('Login');
        });
    }));
    it('should show logout when authenticated', testing_2.async(function () {
        testing_2.TestBed.compileComponents().then(function () {
            var fixture;
            fixture = testing_2.TestBed.createComponent(app_component_1.AppComponent);
            fixture.componentInstance.isAuthenticated = true;
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            expect(compiled.querySelector('ul.navbar-right li ul').innerHTML).toMatch('Logout');
        });
    }));
    it('should show username in nav bar when authenticated', testing_2.async(function () {
        testing_2.TestBed.compileComponents().then(function () {
            var fixture;
            fixture = testing_2.TestBed.createComponent(app_component_1.AppComponent);
            fixture.componentInstance.isAuthenticated = true;
            fixture.componentInstance.userDisplayName = 'Test User';
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            expect(compiled.querySelector('ul.navbar-right li.dropdown a ').innerHTML).toMatch(fixture.componentInstance.userDisplayName);
        });
    }));
});
//# sourceMappingURL=app.component.spec-.js.map