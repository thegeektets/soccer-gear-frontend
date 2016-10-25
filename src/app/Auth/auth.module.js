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
var auth_component_1 = require('./components/auth.component');
var app_providers_1 = require('../app.providers');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var loading_module_1 = require('../directives/Loading/loading.module');
var router_1 = require('@angular/router');
var password_reset_component_1 = require('./components/password_reset.component');
var passwordReset_service_1 = require('./services/passwordReset.service');
var password_reset_done_component_1 = require('./components/password_reset_done.component');
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            declarations: [
                auth_component_1.AuthComponent,
                password_reset_component_1.PasswordResetComponent,
                password_reset_done_component_1.PasswordResetDoneComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                loading_module_1.LoadingModule,
                router_1.RouterModule
            ],
            exports: [
                auth_component_1.AuthComponent,
                password_reset_component_1.PasswordResetComponent
            ],
            providers: [
                app_providers_1.APP_PROVIDERS,
                passwordReset_service_1.PasswordResetService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map