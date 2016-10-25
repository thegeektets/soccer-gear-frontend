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
var LoadingComponent = (function () {
    function LoadingComponent() {
        this.minHeight = 200;
        this.scheme = 'blue-white';
    }
    LoadingComponent.prototype.getMinHeight = function (asNumber) {
        if (asNumber === void 0) { asNumber = false; }
        if (asNumber) {
            return this.minHeight;
        }
        else {
            return this.minHeight + 'px';
        }
    };
    LoadingComponent.prototype.getImagePath = function () {
        return '/assets/images/loading-' + this.scheme + '.gif';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], LoadingComponent.prototype, "minHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LoadingComponent.prototype, "scheme", void 0);
    LoadingComponent = __decorate([
        core_1.Component({
            selector: 'as-loading',
            template: "\n        <div class=\"loading-spinner\"  style=\"position: relative;\">\n            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" [style.minHeight]=\"getMinHeight()\" style=\" position: relative; width:100%;\">\n                <tr><td valign=\"middle\" align=\"center\">\n                    <img style=\"width:100px; height:100px;\" src=\"{{getImagePath()}}\" />\n                </td></tr>\n            </table>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingComponent);
    return LoadingComponent;
}());
exports.LoadingComponent = LoadingComponent;
//# sourceMappingURL=LoadingComponent.js.map