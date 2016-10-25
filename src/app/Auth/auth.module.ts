import { NgModule } from '@angular/core';
import { AuthComponent } from './components/auth.component';
import { APP_PROVIDERS } from '../app.providers';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from '../directives/Loading/loading.module';
import {RouterModule} from '@angular/router';
import {PasswordResetComponent} from './components/password_reset.component';
import {PasswordResetService} from './services/passwordReset.service';
import {PasswordResetDoneComponent} from './components/password_reset_done.component';

@NgModule({
    declarations: [
        AuthComponent,
        PasswordResetComponent,
        PasswordResetDoneComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        LoadingModule,
        RouterModule
    ],
    exports: [
        AuthComponent,
        PasswordResetComponent
    ],
    providers: [
            APP_PROVIDERS,
            PasswordResetService
                ],
})
export class AuthModule {
}
