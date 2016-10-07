import {Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
    selector: 'as-register',
    templateUrl: 'app/Account/templates/userprofile.html',
    styleUrls: [
        'app/Account/styles/userprofile.css'
    ],
})

export class ProfileComponent {

    public user: User;
    private loading: boolean = false;

    constructor(private _userService: UserService,
                private _router: Router
    ) {

    };


}
