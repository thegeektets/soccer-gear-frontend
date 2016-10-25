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
var LinkedInPipe = (function () {
    function LinkedInPipe() {
    }
    LinkedInPipe.prototype.transform = function (value) {
        var reg = /((\w+|\.)?(\w+|\.)?(\w+|\.)?(\@)(\w+\.{1}\w+)(\w+|\.)?(\w+|\.))/g; // emails
        var emailDoneStr = value.replace(reg, '<span class=\'text-primary\'> $1 </span>');
        reg = /((https?\:\/\/)(\S+?)\.(com|edu|net|org|co\.uk|in)(\/?)(\S*))/g; // urls
        var toReturn = emailDoneStr.replace(reg, '<span class=\'text-primary\'> $1 </span>');
        return toReturn;
    };
    LinkedInPipe = __decorate([
        core_1.Pipe({
            name: 'asLinkItAllUp'
        }), 
        __metadata('design:paramtypes', [])
    ], LinkedInPipe);
    return LinkedInPipe;
}());
exports.LinkedInPipe = LinkedInPipe;
//# sourceMappingURL=LinkedInPipe.js.map