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
var SessionService_1 = require('../../services/SessionService');
var NavbarComponent = (function () {
    function NavbarComponent(_sessionService) {
        this._sessionService = _sessionService;
        this.isAuthenticated = false;
        this.userDisplayName = '';
        this.cartTotal = 0;
    }
    NavbarComponent.prototype.logout = function () {
        this._sessionService.logout();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NavbarComponent.prototype, "brand", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavbarComponent.prototype, "isAuthenticated", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NavbarComponent.prototype, "userDisplayName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NavbarComponent.prototype, "cartTotal", void 0);
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'as-navbar',
            templateUrl: 'app/shared/navbar/navbar.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [SessionService_1.SessionService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map