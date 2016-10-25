import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../checkout/services/order.service';
import { Order } from '../../checkout/models/order';

@Component({
    selector: 'as-orders',
    templateUrl: 'app/orders/templates/orders.html',
    styleUrls: [
        'app/orders/styles/orders.css'
    ]
})

export class OrdersComponent implements OnInit {
    public errors: Object;
    public loading: boolean = true;
    private order: Order[];
    constructor(
        private _orderService: OrderService
    ) {
    }

    ngOnInit() {
      this._orderService.getList().subscribe((res) => {
            this.order = res;
            this.loading = false;
      });
    }

}
