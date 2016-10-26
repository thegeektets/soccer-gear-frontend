import {Component} from '@angular/core';

@Component({
    selector: 'as-auth',
    templateUrl: 'app/Auth/templates/password_reset_done.html',
    styleUrls: [
        'app/Auth/styles/auth.css'
    ]
})

export class PasswordResetDoneComponent {

    public email: string;
}
