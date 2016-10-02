import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register.component';
import { APP_PROVIDERS } from '../app.providers';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from '../directives/Loading/loading.module';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoadingModule
    ],
    exports: [
        RegisterComponent
    ],
    providers: [ APP_PROVIDERS ],
})
export class AccountModule {
}
