import {Component, OnInit, Input} from '@angular/core';
import {UserService} from '../services/user.service';
import {SessionService} from '../../services/SessionService';
import {User} from '../models/user';

@Component({
    selector: 'as-profile',
    templateUrl: 'app/Account/templates/userprofile.html',
    styleUrls: [
        'app/Account/styles/userprofile.css'
    ],

})
export class ProfileComponent implements OnInit {
    public userDisplayDetails: any = '';
    public isAuthenticated: boolean = false;
    public current_user = User;


    constructor(
        private _userService: UserService,
        private _sessionService: SessionService
    ) {
        this.isAuthenticated = this._sessionService.isLoggedIn();
        if (this.isAuthenticated) {
            this.getUser();
        }
    }

    ngOnInit() {
    //
    }

    getUser() {
        this._userService.get('current_user').subscribe((res) => {
            this.userDisplayDetails = this._sessionService.user;
        });
    }

}
