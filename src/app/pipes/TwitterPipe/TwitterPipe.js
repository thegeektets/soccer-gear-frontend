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
var TwitterPipe = (function () {
    function TwitterPipe() {
    }
    // (\#\w+) i believe this should find hashtags...not sure if it finds all?
    // (\@\w+)
    TwitterPipe.prototype.transform = function (value) {
        var reg = /(\#\w+)/g;
        var halfNewStr = value.replace(reg, '<span class="hashtag text-primary">$1</span>'); // hashtag finder
        // reg = /((\w+|\.)?(\w+|\.)?(\w+|\.)?(\@)(\w+\.{1}\w+)(\w+|\.)?(\w+|\.))/g;
        // let newStr = halfNewStr.replace(reg, '<span class=\'text-primary\'>$1</span>'); // emails
        reg = /((https?\:\/\/)(\S+?)\.(com|edu|net|org|co\.uk|in)(\/?)(\S*))/g; // urls
        var urlsHighlighted = halfNewStr.replace(reg, '<span class="text-primary url">$1</span>');
        reg = /(\@[a-zA-Z]+)/g;
        var toReturn = urlsHighlighted.replace(reg, '<span class="callout text-primary">$1</span>'); // @ based callout (@Jimmy)
        return toReturn;
    };
    TwitterPipe = __decorate([
        core_1.Pipe({
            name: 'asTweetyBird',
        }), 
        __metadata('design:paramtypes', [])
    ], TwitterPipe);
    return TwitterPipe;
}());
exports.TwitterPipe = TwitterPipe;
//# sourceMappingURL=TwitterPipe.js.map