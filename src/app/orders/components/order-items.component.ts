import { Component, OnInit } from '@angular/core';
import { OrderItemService } from '../../checkout/services/orderItem.service';
import { OrderItem } from '../../checkout/models/order_item';
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
    private orderItems: OrderItem[];
    private oid: string;
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _orderItemService: OrderItemService
    ) {
        this._activatedRoute.params.subscribe((res: RouteParams) => {
            if (res.hasOwnProperty('id')) {
                this.oid = res.id;
            }
        });
    }

    ngOnInit() {
         this._orderItemService.getList().subscribe((res) => {
            this.orderItems = res;
            this.loading = false;
        });
    }

}
