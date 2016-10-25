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
var forms_1 = require('@angular/forms');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var cart_service_1 = require('../../cart/services/cart.service');
var user_service_1 = require('../../Account/services/user.service');
var payment_service_1 = require('../services/payment.service');
var order_service_1 = require('../services/order.service');
var CheckoutComponent = (function () {
    // private orderItem: NewOrder = {id: this.order_id, user: this.user, status: '', cost: '', user_id: this.user_id, modified_on: new Date(), created_on: new Date(), modified_by: this.user_id, created_by: this.user_id};
    function CheckoutComponent(_userService, _cart, _payment, _toasterService, _orderService, fb) {
        this._userService = _userService;
        this._cart = _cart;
        this._payment = _payment;
        this._toasterService = _toasterService;
        this._orderService = _orderService;
        this.fb = fb;
        this.loading = true;
        this.quantityOptions = [];
        this.paymentComplete = false;
        this.newOrder = { id: this.order_id, user: this.user, status: '', cost: '', user_id: this.user_id, modified_on: new Date(), created_on: new Date(), modified_by: this.user_id, created_by: this.user_id };
        this.getUser();
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._cart.getList().subscribe(function (res) {
            _this.cart = res;
            _this.loading = false;
        });
    };
    CheckoutComponent.prototype.getUser = function () {
        var _this = this;
        this._userService.get('current_user').subscribe(function (res) {
            _this.userMpesaPhone = res.mpesa_phone_number;
            _this.userShippingAddress = res.default_shipping_address;
            console.log(_this.userShippingAddress);
            _this.buildForm(_this.userMpesaPhone, _this.userShippingAddress);
            _this.loading = false;
            _this.user = res;
            _this.user_id = res.id;
        });
    };
    CheckoutComponent.prototype.buildForm = function (phone, address) {
        this.form = new forms_1.FormGroup({
            shipping_address: new forms_1.FormControl(address, forms_1.Validators.required),
            mobile_number: new forms_1.FormControl(phone, forms_1.Validators.required),
        });
        this.transactionForm = new forms_1.FormGroup({
            transaction: new forms_1.FormControl('', forms_1.Validators.required),
        });
    };
    CheckoutComponent.prototype.requestPayment = function () {
        var _this = this;
        if (this.form.valid) {
            this.loading = true;
            this.errors = undefined;
            var requestData = this.form.getRawValue();
            var amount = 'amount';
            requestData[amount] = Math.round(this.cart.subtotal);
            this._payment.requestPayment(JSON.stringify(requestData))
                .subscribe(function (res) {
                if (res.status.status === 'SUCCESS') {
                    _this.paymentComplete = true;
                    _this._toasterService.pop('success', 'Payment Requested', '' + _this.cart.subtotal);
                    // add order
                    _this.newOrder.user = _this.user;
                    _this.newOrder.status = 'Pending';
                    _this.newOrder.cost = '' + _this.cart.subtotal;
                    _this.newOrder.user_id = _this.user.id;
                    _this._orderService.post(JSON.stringify(_this.newOrder)).subscribe(function (rest) {
                        _this.loading = false;
                        console.log(rest);
                        // add order items
                        // clear cart
                    }, function (errors) {
                        _this.loading = false;
                        _this.errors = errors;
                        console.log(errors);
                    });
                }
                else {
                    console.log(res);
                }
                _this.loading = false;
            }, function (errors) {
                _this.loading = false;
                _this.errors = errors;
                console.log(errors);
            });
        }
        return false;
    };
    CheckoutComponent.prototype.confirmTransaction = function () {
        var _this = this;
        if (this.transactionForm.valid) {
            this.loading = true;
            this.errors = undefined;
            var requestData = this.transactionForm.getRawValue();
            this._payment.confirmTransaction(JSON.stringify(requestData))
                .subscribe(function (res) {
                console.log(res);
                _this.loading = false;
            }, function (errors) {
                _this.loading = false;
                _this.errors = errors;
                console.log(errors);
            });
        }
        return false;
    };
    CheckoutComponent = __decorate([
        core_1.Component({
            selector: 'as-checkout',
            templateUrl: 'app/checkout/templates/checkout.html',
            styleUrls: [
                'app/checkout/styles/checkout.css'
            ],
            providers: [forms_1.FormBuilder]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, cart_service_1.CartService, payment_service_1.PaymentService, angular2_toaster_1.ToasterService, order_service_1.OrderService, forms_1.FormBuilder])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
exports.CheckoutComponent = CheckoutComponent;
//# sourceMappingURL=checkout.component.js.map