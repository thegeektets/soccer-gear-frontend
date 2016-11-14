import { Component, ApplicationRef, OnInit } from '@angular/core';

import { CONSTANTS } from './shared';
import { SessionService } from './services/SessionService';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { UserService } from './Account/services/user.service';
import { CartService } from './cart/services/cart.service';
import { Cart } from './cart/models/cart';
import { ToasterConfig } from 'angular2-toaster';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html'
})
export class AppComponent implements OnInit {
    public appBrand: string;
    public userDisplayName: string = '';
    public cart: Cart = new Cart({});
    public isAuthenticated: boolean = false;
    public isAdmin: boolean = false;
    public isSuperUser: boolean = false;
    public toasterconfig: ToasterConfig =
        new ToasterConfig({
            showCloseButton: true,
            tapToDismiss: true,
            timeout: 5000,
            positionClass: 'toast-bottom-left'
        });

    constructor(
        private _sessionService: SessionService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _applicationRef: ApplicationRef,
        private _userService: UserService,
        private _cart: CartService
    ) {
        this.isAuthenticated = this._sessionService.isLoggedIn();

        this.appBrand = CONSTANTS.MAIN.APP.BRAND;

        if (this.isAuthenticated) {
            this.getUser();
        }
        this._sessionService.authStatus.subscribe((obj) => {
            this.isAuthenticated = this._sessionService.isLoggedIn();
            if (this.isAuthenticated) {
                this.getUser();
                this._cart.getList().subscribe((res) => {
                    this.cart = res ;
                });
            } else {
                this._sessionService.setUser(null);
                this._cart.clearSession();
                this._cart.createNewSession();
            }
        });

        // checks if the user is logged in

        this._router.events.subscribe((nextValue: NavigationStart) => {

            if (nextValue.url !== '/auth/login' &&
                nextValue.url !== '/account/register' &&
                nextValue.url !== '/password/reset' &&
                nextValue.url !== '/password/reset/:uid/:token' &&
                nextValue.url !== '/auth/forgot-password' &&
                nextValue.url !== '/cart' &&
                nextValue.url !== '/products' &&
                !nextValue.url.match(/^\/product\/.*?$/) &&
                nextValue.url !== '/' &&
                !nextValue.url.match(/^\/auth\/forgot\-password\//)
            ) {
                if (!this.isAuthenticated) {
                    this._router.navigate(['/auth/login']);
                    this._router.navigate(['/password/reset']);
                    this._router.navigate(['/password/reset/:uid/:token']);
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

        this._cart.getList().subscribe((res) => {
            this.cart = res ;
            this._cart.singleO.subscribe((res2) => {
                this.cart = res2 ;
            });
        });
    }
    ngOnInit() {
        //
    }
    getUser() {
        this._userService.get('current_user').subscribe((res) => {
            this._sessionService.setUser(res);
            if ( this._sessionService.user.full_name === '') {
                this.userDisplayName = this._sessionService.user.getName();
                this.isAdmin = this._sessionService.user.is_admin;
                this.isSuperUser = this._sessionService.user.is_superuser;
            } else {
                this.userDisplayName = this._sessionService.user.full_name;
                this.isAdmin = this._sessionService.user.is_admin;
                this.isSuperUser = this._sessionService.user.is_superuser;
            }

        });
    }
}

