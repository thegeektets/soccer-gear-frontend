import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SessionService } from '../../services/SessionService';

@Component({
    selector: 'as-navbar',
    templateUrl: 'app/shared/navbar/navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Input() brand: string;
    @Input() isAuthenticated: boolean = false;
    @Input() userDisplayName: string = '';

    constructor(
        private _sessionService: SessionService
    ) {

    }

    logout() {
        this._sessionService.logout();
    }


}
