import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { ValidationService } from '../../Validators/ValidationService';
import { CartService } from '../../cart/services/cart.service';
import { UserService} from '../../Account/services/user.service';
import { User } from '../../Account/models/user';
import { PaymentService } from '../services/payment.service';
import { OrderService } from '../services/order.service';
import { Product } from '../../product/models/product';
import { NewOrder } from '../models/order';
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
    private payment: Payment;
    private order_id: number;
    private user_id: number;
    private newOrder: NewOrder = {id: this.order_id, user: this.user, status: '', cost: '', user_id: this.user_id, modified_on: new Date(), created_on: new Date(), modified_by: this.user_id, created_by: this.user_id};
    // private orderItem: NewOrder = {id: this.order_id, user: this.user, status: '', cost: '', user_id: this.user_id, modified_on: new Date(), created_on: new Date(), modified_by: this.user_id, created_by: this.user_id};

    constructor(
        private _userService: UserService,
        private _cart: CartService,
        private _payment: PaymentService,
        private _toasterService: ToasterService,
        private _orderService: OrderService,
        private fb: FormBuilder
    ) {
        this.getUser();
    }

    ngOnInit() {

        this._cart.getList().subscribe((res) => {
            this.cart = res;
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
            this._payment.requestPayment(JSON.stringify(requestData))
                .subscribe((res) => {
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
                                console.log(rest);
                                // add order items
                                // clear cart
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
                        console.log(res);
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
