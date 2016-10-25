"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseModel_1 = require('../../bases/models/BaseModel');
var env_1 = require('../../shared/constant/env');
var Product = (function (_super) {
    __extends(Product, _super);
    function Product(obj) {
        _super.call(this);
        for (var field in obj) {
            if (obj.hasOwnProperty(field)) {
                this[field] = obj[field];
            }
        }
    }
    Product.prototype.getMainImage = function () {
        if (typeof this.main_image === 'undefined') {
            return env_1.ENV.DEFAULT_PRODUCT_IMAGE;
        }
        if (this.main_image === null || this.main_image === '') {
            return env_1.ENV.DEFAULT_PRODUCT_IMAGE;
        }
        return env_1.ENV.UPLOADS_URL + this.main_image;
    };
    return Product;
}(BaseModel_1.BaseModel));
exports.Product = Product;
//# sourceMappingURL=product.js.map