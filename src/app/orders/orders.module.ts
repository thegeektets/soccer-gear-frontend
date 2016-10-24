import { NgModule } from '@angular/core';
import { APP_PROVIDERS } from '../app.providers';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './components/orders.component';
import { CommonModule } from '@angular/common';
import { LoadingModule } from '../directives/Loading/loading.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        OrdersComponent
    ],
    imports: [
        CommonModule,
        LoadingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        OrdersComponent
    ],
    providers: [ APP_PROVIDERS ],
})
export class OrdersModule {
}
