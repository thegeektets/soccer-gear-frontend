"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseModel_1 = require('../../bases/models/BaseModel');
var Category = (function (_super) {
    __extends(Category, _super);
    function Category(obj) {
        _super.call(this);
        this.categories = [];
        for (var field in obj) {
            if (obj.hasOwnProperty(field)) {
                if (field === 'categories') {
                    this.categories = [];
                    for (var _i = 0, _a = obj[field]; _i < _a.length; _i++) {
                        var cat = _a[_i];
                        this.categories.push(new Category(cat));
                    }
                }
                else {
                    this[field] = obj[field];
                }
            }
        }
    }
    return Category;
}(BaseModel_1.BaseModel));
exports.Category = Category;
//# sourceMappingURL=category.js.map