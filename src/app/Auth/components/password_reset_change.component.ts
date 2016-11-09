import {Component} from '@angular/core';

@Component({
    selector: 'as-auth',
    templateUrl: 'app/Auth/templates/password_reset_change.html',
    styleUrls: [
        'app/Auth/styles/auth.css'
    ]
})

export class PasswordResetChangeComponent {

    public email: string;
}
