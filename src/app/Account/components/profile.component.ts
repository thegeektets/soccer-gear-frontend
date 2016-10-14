import {Component, OnInit, Input} from '@angular/core';
import {UserService} from '../services/user.service';
import {SessionService} from '../../services/SessionService';
import {User} from '../models/user';
import {ToasterService} from 'angular2-toaster/angular2-toaster';

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
    public userUpdates: any = {};
    public showSave: boolean = false;
    public loading: boolean = false;
    public user: User;


    constructor(
        private _userService: UserService,
        private _sessionService: SessionService,
        private _toasterService: ToasterService
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
    userChanged($event, field) {

        if (this._sessionService.user !== null) {
            if (this._sessionService.user.is_admin ||
                this._sessionService.user.is_staff ||
                this._sessionService.user.is_superuser
            ) {
                this.showSave = true;
                this.userUpdates[field] = $event.target.innerHTML;
            }

        }

    }

    saveChanges() {
        if (this._sessionService.user !== null) {
            if (this._sessionService.user.is_admin ||
                this._sessionService.user.is_staff ||
                this._sessionService.user.is_superuser
            ) {
                this.loading = true;
                let user = new User(this.user);
                for (let field in this.userUpdates) {
                    if (this.userUpdates.hasOwnProperty(field)) {
                        user[field] = this.userUpdates[field].replace(/style=".*?"/ig, '');
                    }
                }
                this._userService.put(user.id, JSON.stringify(user)).subscribe((res) => {
                    this.loading = true;
                    this.user = res;
                    this.showSave = false;
                    this._toasterService.pop('success', 'Saved Changes', this.user.full_name);
                });
            }
        }
    }

}
