import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { ValidationService } from '../../Validators/ValidationService';
import { CartService } from '../../cart/services/cart.service';
import { UserService} from '../../Account/services/user.service';
import { User } from '../../Account/models/user';
import { PaymentService } from '../services/payment.service';
import { OrderService } from '../services/order.service';
import { OrderItemService } from '../services/orderItem.service';
import { Product } from '../../product/models/product';
import { NewOrder, Order } from '../models/order';
import { OrderItem } from '../models/order_item';
import { Payment } from '../models/payment';
import { Cart, CartItem } from '../../cart/models/cart';

@Component({
    selector: 'as-checkout',
    templateUrl: 'app/checkout/templates/checkout.html',
    styleUrls: [
        'app/checkout/styles/checkout.css'
    ],
    providers: [FormBuilder]
})

export class CheckoutComponent implements OnInit {
    public cart: Cart;
    public errors: Object;
    public loading: boolean = true;
    public quantityOptions: number[] = [];
    private form: FormGroup;
    private transactionForm: FormGroup;
    private userMpesaPhone: string;
    private userShippingAddress: string;
    private paymentComplete = false;
    private user: User;
    private order_id: number;
    private item_id: number;
    private user_id: number;
    private order: Order;
    private product: Product;
    private newOrder: NewOrder = {id: this.order_id, user: this.user, status: '', cost: '', user_id: this.user_id, modified_on: new Date(), created_on: new Date(), modified_by: this.user_id, created_by: this.user_id};
    private payment: Payment = {id: this.order_id, user: this.user, mpesa_code: '', user_id: this.user_id, modified_on: new Date(), created_on: new Date(), modified_by: this.user_id, created_by: this.user_id};
    private cartItems: any[];
    constructor(
        private _userService: UserService,
        private _cart: CartService,
        private _payment: PaymentService,
        private _toasterService: ToasterService,
        private _orderService: OrderService,
        private _orderItemService: OrderItemService,
        private fb: FormBuilder
    ) {
        this.getUser();
    }

    ngOnInit() {

        this._cart.getList().subscribe((res) => {
            this.cart = res;
            this.cartItems = this.cart.items;
            this.loading = false;
        });
    }

    getUser() {
        this._userService.get('current_user').subscribe((res) => {
            this.userMpesaPhone = res.mpesa_phone_number;
            this.userShippingAddress = res.default_shipping_address;
            console.log(this.userShippingAddress);
            this.buildForm(this.userMpesaPhone, this.userShippingAddress);
            this.loading = false;
            this.user = res;
            this.user_id = res.id;
       });
    }


    buildForm(phone, address) {
        this.form = new FormGroup({
            shipping_address: new FormControl(address, Validators.required),
            mobile_number: new FormControl(phone, Validators.required),
        });
        this.transactionForm = new FormGroup({
            transaction: new FormControl('', Validators.required),
        });
    }
    requestPayment() {
        if (this.form.valid) {
            this.loading = true;
            this.errors = undefined;
            let requestData = this.form.getRawValue();
            let amount = 'amount';
            requestData[amount] = Math.round(this.cart.subtotal);
            this._payment.requestPayment(JSON.stringify(requestData)).subscribe((res) => {
                        if (res.status.status === 'SUCCESS') {
                            this.paymentComplete = true;
                            this._toasterService.pop('success', 'Payment Requested', '' + this.cart.subtotal);
                            // add order
                            this.newOrder.user = this.user;
                            this.newOrder.status = 'Pending';
                            this.newOrder.cost = '' + this.cart.subtotal;
                            this.newOrder.user_id = this.user.id;
                            this._orderService.post(JSON.stringify(this.newOrder)).subscribe((rest) => {
                                this.loading = false;
                                this.order = rest;
                                for (let i = 0; i < this.cartItems.length; i++) {
                                    let item = this.cartItems[i];
                                    if (item !== null) {
                                        item.price = Math.round(item.product.price);
                                        item.order_id = this.order.id;
                                        item.product_id = item.product.id;
                                        item.order = this.order;
                                        item.user_id = this.user_id;
                                        this._orderItemService.post(JSON.stringify(item)).subscribe((resi) => {
                                            this.loading = false;
                                        }, (errors) => {
                                            this.loading = false;
                                            this.errors = errors;
                                            console.log(errors);
                                        });
                                    }
                                }
                                // remove cart
                                this._cart.delete(this.cart.id).subscribe((resc) => {
                                    this.cart = resc;
                                    this.cart.items = [];
                                });

                            }, (errors) => {
                                this.loading = false;
                                this.errors = errors;
                                console.log(errors);
                            }
                           );
                        } else {
                            console.log(res);
                        }
                        this.loading = false;
                    },
                    (errors) => {
                        this.loading = false;
                        this.errors = errors;
                        console.log(errors);
                    }
                );
        }
        return false;
    }
    confirmTransaction() {
        if (this.transactionForm.valid) {
            this.loading = true;
            this.errors = undefined;
            let requestData = this.transactionForm.getRawValue();
            this._payment.confirmTransaction(JSON.stringify(requestData))
                .subscribe((res) => {
                       if (res.status.status === 'SUCCESS') {
                           this.payment.mpesa_code = res.content.transaction;
                           this.payment.user_id = this.user.id;
                           this.payment.user = this.user;
                           this._payment.post(JSON.stringify(this.payment)).subscribe((resf) => {
                               this.payment = resf;
                               this.order.status = 'Confirmed';
                               this.order.payment = this.payment;
                               this.order.payment_id = this.payment.id;
                               console.log(this.order);
                               this._orderService.put(this.order.id, JSON.stringify(this.order)).subscribe((rest) => {
                                    this.loading = false;
                                    this._toasterService.pop('success', 'Payment Confirmed', '');
                                    this.paymentComplete = true;
                                });
                           });
                       } else {
                           this._toasterService.pop('warning', 'Payment Confirmation Failed', '');
                       }
                       this.loading = false;
                    },
                    (errors) => {
                        this.loading = false;
                        this.errors = errors;
                        console.log(errors);
                    }
                );
        }
        return false;
    }

}
