import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';


@Component({
    selector: 'as-register',
    templateUrl: 'app/Account/templates/register.html',
    styleUrls: [
        'app/Account/styles/register.css'
    ]
})

export class RegisterComponent {

    public password: string;
    public username: string;
    public email: string;
    public errorMsg: string | void;

    private loading: boolean = false;

    constructor(
        private _userService: UserService,
        private _router: Router
    ) {
        return;
    };

    register_user() {
        this.loading = true;
        this.errorMsg = null;
        this._userService.post(JSON.stringify({'username': this.username, 'password': this.password}))
            .subscribe((res) => {
                    this.loading = false;
                },
                (errorMsg) => {
                    this.loading = false;
                    if (errorMsg.hasOwnProperty('non_field_errors')) {
                        this.errorMsg = errorMsg.non_field_errors;
                    }
                    this.password = '';
                }
            );
    }


}
