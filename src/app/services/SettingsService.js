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
var env_1 = require('../shared/constant/env');
var SettingsService = (function () {
    function SettingsService() {
        this.devMode = true;
        this.protocol = env_1.ENV.API_PROTOCOL;
        this.domain = env_1.ENV.API_DOMAIN;
        this.baseUrl = env_1.ENV.API_baseUrl;
        this.apiVersion = env_1.ENV.API_apiVersion;
        if (!this.devMode) {
            this.protocol = 'http';
            this.domain = '127.0.0.1';
        }
    }
    SettingsService.prototype.getProtocol = function () {
        return this.protocol;
    };
    SettingsService.prototype.isDevMode = function () {
        return this.devMode;
    };
    SettingsService.prototype.getDomain = function () {
        return this.domain;
    };
    SettingsService.prototype.getBaseUrl = function (version) {
        if (typeof version === 'undefined') {
            version = this.apiVersion;
        }
        return this.baseUrl + 'v' + version + '/';
    };
    SettingsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SettingsService);
    return SettingsService;
}());
exports.SettingsService = SettingsService;
//# sourceMappingURL=SettingsService.js.map