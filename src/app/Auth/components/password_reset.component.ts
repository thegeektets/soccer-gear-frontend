import {Component} from '@angular/core';
import {PasswordResetService} from '../services/passwordReset.service';
import {AuthToken} from '../../services/AuthToken';
import {Router} from '@angular/router';

@Component({
    selector: 'as-auth',
    templateUrl: 'app/Auth/templates/password_reset_form.html',
    styleUrls: [
        'app/Auth/styles/auth.css'
    ]
})

export class PasswordResetComponent {
    public email: string;
    public errorMsg: Object;
    private loading: boolean = false;

    constructor(
        private _passwordReset: PasswordResetService,
        private _authToken: AuthToken,
        private _router: Router

    ) {
        return;
    };

    passwordReset() {
        console.log('password reset');
        this.loading = true;
        this.errorMsg = undefined;
        this._passwordReset.passwordReset(JSON.stringify({'email': this.email}))
            .subscribe((res) => {
                this.loading = false;
            },
                (errorMsg) => {
                    this.loading = false;
                    this.errorMsg = errorMsg;
                    this.email = '';

                }

            );
        this._router.navigate(['/password/reset/done/']);
        return false;
    }

}
