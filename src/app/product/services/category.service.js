"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var BaseService_1 = require('../../bases/services/BaseService');
var http_1 = require('@angular/http');
var HttpSettingsService_1 = require('../../services/HttpSettingsService');
var category_1 = require('../models/category');
var CategoryService = (function (_super) {
    __extends(CategoryService, _super);
    function CategoryService(http, _httpSettings) {
        _super.call(this, http, _httpSettings);
        this.http = http;
        this._httpSettings = _httpSettings;
        this._basePath = 'categories/';
    }
    CategoryService.prototype.listMap = function (res) {
        var toReturn = res.json();
        for (var num in toReturn.results) {
            if (toReturn.results.hasOwnProperty(num)) {
                toReturn.results[num] = new category_1.Category(toReturn.results[num]);
            }
        }
        return toReturn;
    };
    CategoryService.prototype.singleMap = function (res) {
        return new category_1.Category(res.json());
    };
    CategoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, HttpSettingsService_1.HttpSettingsService])
    ], CategoryService);
    return CategoryService;
}(BaseService_1.BaseService));
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map