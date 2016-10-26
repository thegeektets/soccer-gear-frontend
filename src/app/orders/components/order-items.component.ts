import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../checkout/services/order.service';
import { Order } from '../../checkout/models/order';
import { ActivatedRoute } from '@angular/router';


interface RouteParams {
    id: string;
}

@Component({
    selector: 'as-order-items',
    templateUrl: 'app/orders/templates/order_items.html',
    styleUrls: [
        'app/orders/styles/order_items.css'
    ]
})


export class OrderItemsComponent implements OnInit {
    public errors: Object;
    public loading: boolean = true;
    private order: Order[];
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _orderService: OrderService
    ) {
        this._activatedRoute.params.subscribe((res: RouteParams) => {
            if (res.hasOwnProperty('id')) {
                this.getOrderItems(res.id);
            }
        });
    }

    ngOnInit() {
      this._orderService.getList().subscribe((res) => {
            this.order = res;
            this.loading = false;
      });
    }

    getOrderItems(id) {
      // implement this
    }

}
