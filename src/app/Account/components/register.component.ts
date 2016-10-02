import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { NewUser } from '../models/new-user';

@Component({
    selector: 'as-register',
    templateUrl: 'app/Account/templates/register.html',
    styleUrls: [
        'app/Account/styles/register.css'
    ]
})

export class RegisterComponent {

    public user: NewUser = new NewUser({});

    public errorMsg: string | void;

    private loading: boolean = false;

    constructor(private _userService: UserService,
                private _router: Router) {
        return;
    };

    registerUser() {
        this.loading = true;
        this.errorMsg = null;
        console.log('registering');
        this._userService.register(JSON.stringify(this.user))
            .subscribe((res) => {
                    this.loading = false;
                },
                (errorMsg) => {
                    this.loading = false;
                    if (errorMsg.hasOwnProperty('non_field_errors')) {
                        this.errorMsg = errorMsg.non_field_errors;
                    }
                    this.user.password = '';
                }
            );
    }

}
