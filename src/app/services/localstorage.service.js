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
var StorageMethods;
(function (StorageMethods) {
    StorageMethods[StorageMethods["LOCALSTORAGE"] = 1] = "LOCALSTORAGE";
    StorageMethods[StorageMethods["COOKIE"] = 2] = "COOKIE";
})(StorageMethods || (StorageMethods = {}));
var LocalStorageService = (function () {
    function LocalStorageService() {
        if (typeof localStorage === 'undefined') {
            this.storageMethod = StorageMethods.COOKIE;
        }
        else {
            this.storageMethod = StorageMethods.LOCALSTORAGE;
        }
    }
    LocalStorageService.prototype.store = function (field, data) {
        if (this.storageMethod === StorageMethods.LOCALSTORAGE) {
            this.storeLocalStorage(field, JSON.stringify(data));
        }
        else if (this.storageMethod === StorageMethods.COOKIE) {
            this.storeCookie(field, data);
        }
    };
    LocalStorageService.prototype.remove = function (field) {
        if (this.storageMethod === StorageMethods.LOCALSTORAGE) {
            this.removeLocalStorage(field);
        }
        else if (this.storageMethod === StorageMethods.COOKIE) {
            this.removeCookie(field);
        }
    };
    LocalStorageService.prototype.storeLocalStorage = function (field, data) {
        localStorage.setItem(field, data);
    };
    LocalStorageService.prototype.removeLocalStorage = function (field) {
        localStorage.removeItem(field);
    };
    // TODO: Cookie fallback storage needs to be implemented
    LocalStorageService.prototype.storeCookie = function (field, data) {
        console.warn('Cookie fallback storage needs to be implemented');
    };
    // TODO: Cookie fallback storage needs to be implemented
    LocalStorageService.prototype.removeCookie = function (field) {
        console.warn('Cookie fallback storage needs to be implemented');
    };
    LocalStorageService.prototype.retrieve = function (field, defaultValue) {
        var value;
        if (this.storageMethod === StorageMethods.LOCALSTORAGE) {
            value = this.retrieveLocalStorage(field);
        }
        else if (this.storageMethod === StorageMethods.COOKIE) {
            this.retrieveCookie(field);
        }
        if (value === null && typeof defaultValue !== 'undefined') {
            return defaultValue;
        }
        return JSON.parse(value);
    };
    LocalStorageService.prototype.retrieveLocalStorage = function (field) {
        return localStorage.getItem(field);
    };
    // TODO: Cookie fallback storage needs to be implemented
    LocalStorageService.prototype.retrieveCookie = function (field) {
        console.warn('Cookie fallback storage needs to be implemented');
    };
    LocalStorageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LocalStorageService);
    return LocalStorageService;
}());
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=localstorage.service.js.map