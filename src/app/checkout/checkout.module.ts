import { NgModule } from '@angular/core';
import { APP_PROVIDERS } from '../app.providers';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout.component';
import { CommonModule } from '@angular/common';
import { LoadingModule } from '../directives/Loading/loading.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CheckoutComponent
    ],
    imports: [
        CommonModule,
        LoadingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CheckoutComponent
    ],
    providers: [ APP_PROVIDERS ],
})
export class CheckoutModule {
}
