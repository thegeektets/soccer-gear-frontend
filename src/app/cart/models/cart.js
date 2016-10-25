"use strict";
var product_1 = require('../../product/models/product');
var CartItem = (function () {
    function CartItem(obj) {
        for (var field in obj) {
            if (obj.hasOwnProperty(field)) {
                if (field === 'product') {
                    this[field] = new product_1.Product(obj[field]);
                }
                else {
                    this[field] = obj[field];
                }
            }
        }
    }
    CartItem.prototype.getChosenAttributesAsArray = function () {
        var toReturn = [];
        for (var field in this.chosen_attributes) {
            if (this.chosen_attributes.hasOwnProperty(field)) {
                toReturn.push({
                    field: field,
                    value: this.chosen_attributes[field]
                });
            }
        }
        return toReturn;
    };
    return CartItem;
}());
exports.CartItem = CartItem;
var Cart = (function () {
    function Cart(obj) {
        this.items = [];
        for (var field in obj) {
            if (obj.hasOwnProperty(field)) {
                if (field === 'items') {
                    var list = [];
                    for (var _i = 0, _a = obj[field]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        list.push(new CartItem(item));
                    }
                    this[field] = list;
                }
                else {
                    this[field] = obj[field];
                }
            }
        }
    }
    return Cart;
}());
exports.Cart = Cart;
//# sourceMappingURL=cart.js.map