"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseModel_1 = require('../../bases/models/BaseModel');
var OrderItem = (function (_super) {
    __extends(OrderItem, _super);
    function OrderItem(obj) {
        _super.call(this);
        for (var field in obj) {
            if (obj.hasOwnProperty(field)) {
                this[field] = obj[field];
            }
        }
    }
    return OrderItem;
}(BaseModel_1.BaseModel));
exports.OrderItem = OrderItem;
//# sourceMappingURL=order_item.js.map