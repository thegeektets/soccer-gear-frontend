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
var core_2 = require('@angular/core');
var ListResponse_1 = require('../../bases/models/ListResponse');
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.currentOffset = 0;
        this.pageChange = new core_2.EventEmitter();
    }
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        this.countPages();
    };
    PaginationComponent.prototype.countPages = function () {
        console.log(this.state);
        var pagesArray = [];
        var numPages = this.state.total / this.state.limit;
        for (var i = 0; i < numPages; i++) {
            pagesArray.push({
                offset: i * this.state.limit,
                page: i + 1
            });
        }
        if (pagesArray.length > 0) {
            this.pagesArray = pagesArray;
        }
        else {
            this.pagesArray = undefined;
        }
    };
    PaginationComponent.prototype.goToPage = function (offset) {
        offset = Math.min(offset, ((this.pagesArray.length - 1) * 10)); // this should ensure i never go beyond the last page
        this.pageChange.emit(offset); // emits offset and when the (pageChange)=function($event) is called $event is the offset
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ListResponse_1.ResponseState)
    ], PaginationComponent.prototype, "state", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "currentOffset", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], PaginationComponent.prototype, "pageChange", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'as-pagination',
            templateUrl: 'app/directives/Pagination/templates/pagination.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map