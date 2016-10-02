import { Component, ApplicationRef } from '@angular/core';

import { CONSTANTS } from './shared';
import { SessionService } from './services/SessionService';
import { Router, ActivatedRoute, UrlSegment, NavigationStart } from '@angular/router';
import { UserService } from './Account/services/user.service';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html'
})
export class AppComponent {
    public appBrand: string;
    public userDisplayName: string = '';

    public isAuthenticated: boolean = false;

    constructor(
        private _sessionService: SessionService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _applicationRef: ApplicationRef,
        private _userService: UserService
    ) {
        this.isAuthenticated = this._sessionService.isLoggedIn();
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;

        if (this.isAuthenticated) {
            this.getUser();
        }
        this._sessionService.authStatus.subscribe((obj) => {
            this.isAuthenticated = this._sessionService.isLoggedIn();
            console.log('this.isAuthenticated', this.isAuthenticated);
            if (this.isAuthenticated) {
                this.getUser();
            } else {
                this._sessionService.setUser(null);
            }
        });

        // checks if the user is logged in
        this._activatedRoute.url.subscribe((nextValue: UrlSegment[]) => {

            if (nextValue[0].path !== 'auth/login' &&
                nextValue[0].path !== 'auth/register' &&
                nextValue[0].path !== 'auth/forgot-password' &&
                nextValue[0].path !== '' &&
                !nextValue[0].path.match(/^auth\/forgot\-password\//)
            ) {
                if (!this.isAuthenticated) {
                    this._router.navigate(['/auth/login']);
                }
            }

            this._applicationRef.tick();
            setTimeout(() => {
                this._applicationRef.tick();
            }, 100);
            setTimeout(() => {
                this._applicationRef.tick();
            }, 300);
            setTimeout(() => {
                this._applicationRef.tick();
            }, 500);
            setTimeout(() => {
                this._applicationRef.tick();
            }, 700);

        });


        this._router.events.subscribe((nextValue: NavigationStart) => {
            console.log(nextValue);

            if (nextValue.url !== '/auth/login' &&
                nextValue.url !== '/auth/register' &&
                nextValue.url !== '/auth/forgot-password' &&
                nextValue.url !== '/' &&
                !nextValue.url.match(/^\/auth\/forgot\-password\//)
            ) {
                if (!this.isAuthenticated) {
                    this._router.navigate(['/auth/login']);
                }
            }

            this._applicationRef.tick();
            setTimeout(() => {
                this._applicationRef.tick();
            }, 100);
            setTimeout(() => {
                this._applicationRef.tick();
            }, 300);
            setTimeout(() => {
                this._applicationRef.tick();
            }, 500);
            setTimeout(() => {
                this._applicationRef.tick();
            }, 700);
        });
    }

    getUser() {
        this._userService.get('current_user').subscribe((res) => {
            this._sessionService.setUser(res);
            this.userDisplayName = this._sessionService.user.getName();
        });
    }
}

