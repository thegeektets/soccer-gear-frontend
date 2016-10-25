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
var http_1 = require('@angular/http');
var HttpSettingsService_1 = require('../../services/HttpSettingsService');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var BaseService = (function () {
    function BaseService(http, _httpSettings) {
        this.http = http;
        this._httpSettings = _httpSettings;
        this._basePath = '';
        this.singleO = new core_1.EventEmitter();
        this.listO = new core_1.EventEmitter();
    }
    BaseService.prototype.listMap = function (res) {
        return res.json();
    };
    BaseService.prototype.singleMap = function (res) {
        return res.json();
    };
    BaseService.prototype.getUrl = function (path) {
        if (typeof path === 'undefined') {
            path = this._basePath;
        }
        return this._httpSettings.getBaseUrl() + path;
    };
    BaseService.prototype.getList = function (params) {
        var _this = this;
        var options = {
            headers: this._httpSettings.getHeaders(),
            search: new http_1.URLSearchParams(this.makeStringOfParams(params))
        };
        return this.http.get(this.getUrl(), options)
            .map(function (res) {
            var toReturn = _this.listMap(res);
            _this.listObject = toReturn;
            _this.listO.emit(toReturn);
            return toReturn;
        })
            .catch(this.handleError);
    };
    BaseService.prototype.get = function (id, params) {
        var _this = this;
        var options = {
            headers: this._httpSettings.getHeaders(),
            search: new http_1.URLSearchParams(this.makeStringOfParams(params))
        };
        return this.http.get(this.getUrl() + id + '/', options)
            .map(function (res) {
            var toReturn = _this.singleMap(res);
            _this.singleObject = toReturn;
            _this.singleO.emit(toReturn);
            return toReturn;
        })
            .catch(this.handleError);
    };
    // new
    BaseService.prototype.post = function (data, params) {
        var _this = this;
        var options = {
            headers: this._httpSettings.getHeaders(),
            search: new http_1.URLSearchParams(this.makeStringOfParams(params))
        };
        return this.http.post(this.getUrl(), data, options)
            .map(function (res) {
            var toReturn = _this.singleMap(res);
            _this.singleObject = toReturn;
            _this.singleO.emit(toReturn);
            return toReturn;
        })
            .catch(this.handleError);
    };
    // update
    BaseService.prototype.put = function (id, data, params) {
        var _this = this;
        var options = {
            headers: this._httpSettings.getHeaders(),
            search: new http_1.URLSearchParams(this.makeStringOfParams(params))
        };
        return this.http.put(this.getUrl() + id + '/', data, options)
            .map(function (res) {
            var toReturn = _this.singleMap(res);
            _this.singleObject = toReturn;
            _this.singleO.emit(toReturn);
            return toReturn;
        })
            .catch(this.handleError);
    };
    BaseService.prototype.delete = function (id, params) {
        var options = {
            headers: this._httpSettings.getHeaders(),
            search: new http_1.URLSearchParams(this.makeStringOfParams(params))
        };
        return this.http.delete(this.getUrl() + id + '/', options)
            .map(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    BaseService.prototype.handleError = function (error) {
        console.error(error.status, error.statusText, error.toString());
        var json = error.json();
        // var toReturn = 'Server error';
        var toReturn = json;
        if (json.hasOwnProperty('error')) {
            toReturn = json.error;
        }
        if (json.hasOwnProperty('detail')) {
            toReturn = json.detail;
        }
        return Observable_1.Observable.throw(toReturn);
    };
    BaseService.prototype.makeStringOfParams = function (obj) {
        var toReturn = '';
        var qsArray = [];
        for (var field in obj) {
            if (obj.hasOwnProperty(field)) {
                if (obj[field] === true) {
                    obj[field] = 'True';
                }
                if (obj[field] === false) {
                    obj[field] = 'False';
                }
                qsArray.push(field + '=' + obj[field]);
            }
        }
        toReturn = qsArray.join('&');
        return toReturn;
    };
    BaseService.prototype.removeEmptyFields = function (obj) {
        var newObj = {};
        for (var field in obj) {
            if (obj.hasOwnProperty(field)) {
                if ((obj[field] === true || obj[field] === false) ||
                    (obj[field] !== '' && obj[field] !== null)) {
                    newObj[field] = obj[field];
                }
            }
        }
        return newObj;
    };
    BaseService.prototype.mergeLists = function (listFrom, listTo) {
        for (var index in listFrom) {
            if (listFrom.hasOwnProperty(index)) {
                for (var listToIndex in listTo) {
                    if (listTo.hasOwnProperty(listToIndex)) {
                        if (listTo[listToIndex].id === listFrom[index].id) {
                            listTo[listToIndex] = listFrom[index];
                        }
                    }
                }
            }
        }
        return listTo;
    };
    BaseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, HttpSettingsService_1.HttpSettingsService])
    ], BaseService);
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=BaseService.js.map