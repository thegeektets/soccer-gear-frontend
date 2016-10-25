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
var HumanizePipe = (function () {
    function HumanizePipe() {
    }
    HumanizePipe.prototype.transform = function (value) {
        if ((typeof value) !== 'string') {
            return value;
        }
        value = value.split(/(?=[A-Z])/).join(' ');
        value = value[0].toUpperCase() + value.slice(1);
        return value;
    };
    HumanizePipe = __decorate([
        core_1.Pipe({
            name: 'asHumanize'
        }), 
        __metadata('design:paramtypes', [])
    ], HumanizePipe);
    return HumanizePipe;
}());
exports.HumanizePipe = HumanizePipe;
//# sourceMappingURL=humanize.js.map