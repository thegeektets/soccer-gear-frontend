import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../checkout/services/payment.service';
import { Payment } from '../../checkout/models/payment';
import { ActivatedRoute } from '@angular/router';


interface RouteParams {
    id: string;
}

@Component({
    selector: 'as-order-payment',
    templateUrl: 'app/orders/templates/order_payment.html',
    styleUrls: [
        'app/orders/styles/order_payment.css'
    ]
})


export class OrderPaymentComponent implements OnInit {
    public errors: Object;
    public loading: boolean = true;
    private orderPayment: Payment;
    private oid: string;
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _paymentService: PaymentService
    ) {
        this._activatedRoute.params.subscribe((res: RouteParams) => {
            if (res.hasOwnProperty('id')) {
                this.oid = res.id;
            }
        });
    }

    ngOnInit() {
         this._paymentService.get(this.oid).subscribe((res) => {
            this.orderPayment = res;
            this.loading = false;
        });
    }

}
