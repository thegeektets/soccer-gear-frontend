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
var FacebookPipe = (function () {
    function FacebookPipe() {
    }
    FacebookPipe.prototype.transform = function (value) {
        var newStr = '<span>' + value + '<span>';
        var reg = /(\#\w+)/g;
        var hashTaggedStr = newStr.replace(reg, '<span class=\'hashtag text-primary\'> $1 </span>');
        reg = reg = /((https?\:\/\/)(\S+?)\.(com|edu|net|org|co\.uk|in)(\/?)(\S*))/g;
        var toReturn = hashTaggedStr.replace(reg, '<span class=\'url text-primary\'> $1 </span>');
        return toReturn;
    };
    FacebookPipe = __decorate([
        core_1.Pipe({
            name: 'asFacebookify',
        }), 
        __metadata('design:paramtypes', [])
    ], FacebookPipe);
    return FacebookPipe;
}());
exports.FacebookPipe = FacebookPipe;
//# sourceMappingURL=FacebookPipe.js.map