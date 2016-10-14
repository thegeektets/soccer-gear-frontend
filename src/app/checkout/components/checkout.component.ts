import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../Validators/ValidationService';
import { CartService } from '../../cart/services/cart.service';
import { UserService} from '../../Account/services/user.service';
import { PaymentService } from '../services/payment.service';
import {Product} from '../../product/models/product';
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


    constructor(
        private _userService: UserService,
        private _cart: CartService,
        private _payment: PaymentService,
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
            return res.user;
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
                        console.log(res.Payment.status);
                        if (res.payment.status === 'FAIL') {
                            this.paymentComplete = false;
                        } else {
                            this.paymentComplete = true;
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
