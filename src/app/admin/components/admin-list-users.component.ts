import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Product } from '../../product/models/product';
import { SessionService } from '../../services/SessionService';
import { ToasterService } from 'angular2-toaster';
import { ListResponse } from '../../bases/models/ListResponse';
import { OrderService } from '../../checkout/services/order.service';
import { Order } from '../../checkout/models/order';

@Component({
    selector: 'as-admin-list-users',
    templateUrl: 'app/admin/templates/admin_list_users.html',
    styleUrls: [
        'app/admin/styles/admin_list_users.css'
    ]
})

export class AdminListUsersComponent implements OnInit {
    public errors: Object;
    public loading: boolean = true;
    public product: Product;
    public orderResponse: ListResponse;
    private oid: string;
    private productForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private _sessionService: SessionService,
        private _orderService: OrderService,
        private _toasterService: ToasterService
                ) {
        }
    ngOnInit() {
        this.getPayments();
    }

    getPayments() {
        this.loading = true;
        this._orderService.getList().subscribe((res) => {
            this.orderResponse = res;
            this.loading = false;
        });
    }


}

