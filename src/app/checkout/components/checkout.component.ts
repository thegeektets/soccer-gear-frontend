import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../Validators/ValidationService';
import { CartService } from '../../cart/services/cart.service';
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

    constructor(
        private _cart: CartService,
        private _payment: PaymentService,
        private fb: FormBuilder
    ) {
        this.buildForm();
    }

    ngOnInit() {
        this._cart.getList().subscribe((res) => {
            this.cart = res;
            this.loading = false;
        });
    }

    buildForm() {
        this.form = new FormGroup({
            mobile_number: new FormControl('', Validators.required),
        });
    }
    requestPayment() {
        if (this.form.valid) {
            this.loading = true;
            this.errors = undefined;
            let requestData = this.form.getRawValue();
            let amount = 'amount';
            requestData[amount] = Math.round(this.cart.subtotal);
            console.log(JSON.stringify(requestData));
            this._payment.requestPayment(JSON.stringify(requestData))
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
