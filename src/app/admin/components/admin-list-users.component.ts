import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Product } from '../../product/models/product';
import { SessionService } from '../../services/SessionService';
import { ToasterService } from 'angular2-toaster';
import { ListResponse } from '../../bases/models/ListResponse';
import { OrderService } from '../../checkout/services/order.service';
import { UserService } from '../../Account/services/user.service';

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
    public userResponse: ListResponse;
    private oid: string;
    private productForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private _sessionService: SessionService,
        private _userService: UserService,
        private _toasterService: ToasterService
                ) {
        }
    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.loading = true;
        this._userService.getList().subscribe((res) => {
            this.userResponse = res;
            this.loading = false;
        });
    }
    deleteUser($user_id) {
        this.loading = true;
        this._userService.delete($user_id).subscribe((res) => {
            this.getUsers();
            this._toasterService.pop('success', 'User deleted');
            this.loading = false;
        });
        return false;
    }


}

