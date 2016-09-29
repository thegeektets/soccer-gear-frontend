import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register.component';
import { APP_PROVIDERS } from '../app.providers';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from '../directives/Loading/loading.module';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        LoadingModule
    ],
    exports: [
        RegisterComponent
    ],
    providers: [ APP_PROVIDERS ],
})
export class AccountModule {
}
