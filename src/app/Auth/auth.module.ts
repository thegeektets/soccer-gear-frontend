import { NgModule } from '@angular/core';
import { AuthComponent } from './components/auth.component';
import {APP_PROVIDERS} from '../app.providers';
import { AuthService } from './services/auth.service';
import { AuthToken } from '../services/AuthToken';
import { LOADING_DIRECTIVES } from '../directives/Loading/loading';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AuthComponent,
        LOADING_DIRECTIVES
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        AuthComponent
    ],
    providers: [ APP_PROVIDERS ],
})
export class AuthModule {
}
