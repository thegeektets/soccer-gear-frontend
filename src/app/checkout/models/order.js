"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseModel_1 = require('../../bases/models/BaseModel');
var Order = (function (_super) {
    __extends(Order, _super);
    function Order(obj) {
        _super.call(this);
        for (var field in obj) {
            if (obj.hasOwnProperty(field)) {
                this[field] = obj[field];
            }
        }
    }
    return Order;
}(BaseModel_1.BaseModel));
exports.Order = Order;
var NewOrder = (function (_super) {
    __extends(NewOrder, _super);
    function NewOrder(obj) {
        _super.call(this);
        for (var field in obj) {
            if (obj.hasOwnProperty(field)) {
                this[field] = obj[field];
            }
        }
    }
    return NewOrder;
}(BaseModel_1.BaseModel));
exports.NewOrder = NewOrder;
//# sourceMappingURL=order.js.map