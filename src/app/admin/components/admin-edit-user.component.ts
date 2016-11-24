import { Component, OnInit, Input} from '@angular/core';
import { SessionService} from '../../services/SessionService';
import { ToasterService} from 'angular2-toaster/angular2-toaster';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../Validators/ValidationService';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '../../Account/models/user';
import {UserService} from '../../Account/services/user.service';

interface RouteParams {
    id: string;
}

@Component({
    selector: 'as-profile',
    templateUrl: 'app/admin/templates/admin_edit_user.html',
    styleUrls: [
        'app/admin/styles/admin_edit_user.css'
    ],
    providers: [FormBuilder]
})

export class AdminEditUserComponent implements OnInit {
    public userDisplayDetails: any = '';
    public isAuthenticated: boolean = false;
    public current_user = User;
    public userUpdates: any = {};
    public showSave: boolean = false;
    public loading: boolean = false;
    public user: User;

    private form: FormGroup;

    constructor(
        private _userService: UserService,
        private _sessionService: SessionService,
        private _toasterService: ToasterService,
        private fb: FormBuilder,
        private _activatedRoute: ActivatedRoute
    ) {
         this._activatedRoute.params.subscribe((res: RouteParams) => {
            if (res.hasOwnProperty('id')) {
                this.getUser(res.id);
            }
        });
        this.buildForm();
    }

    ngOnInit() {
    //
    }

    buildForm() {
        this.form = new FormGroup({
            full_name: new FormControl('', Validators.required),
            username: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            is_admin: new FormControl(''),
            // email: new FormControl('', Validators.compose([Validators.required, ValidationService.emailValidator])),
            mobile_number: new FormControl('', Validators.required),
            date_joined: new FormControl('', Validators.required),
            default_billing_address: new FormControl('', Validators.required),
            default_shipping_address: new FormControl('', Validators.required),
            mpesa_phone_number: new FormControl('', Validators.required)
        });

    }

    getUser(id) {
        this.loading = true;
        this._userService.get(id).subscribe((res) => {
            this.userDisplayDetails = res;
            this.loading = false;
        });
    }
    userChanged($event, field) {

        if (this._sessionService.user !== null) {
            this.showSave = true;
            this.userUpdates[field] = $event.target.innerHTML;
        }

    }

    saveChanges() {
         if (this._sessionService.user !== null) {
            let user = this._sessionService.user;
            for (let field in this.userUpdates) {
                if (this.userUpdates.hasOwnProperty(field)) {
                  user[field] = this.userUpdates[field].replace(/style=".*?"/ig, '');
                }
            }
            this._userService.put(user.id, JSON.stringify(this.form.getRawValue())).subscribe((res) => {
                this.loading = true;
                this.user = res;
                this.showSave = false;
                this._toasterService.pop('success', 'Saved Changes', this.user.full_name);
                this.loading = false;
            });

         }
    }


}
