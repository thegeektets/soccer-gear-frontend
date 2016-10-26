import { NgModule } from '@angular/core';
import { APP_PROVIDERS } from '../app.providers';
import { OrdersComponent } from './components/orders.component';
import { OrderItemsComponent } from './components/order-items.component';
import { LoadingModule } from '../directives/Loading/loading.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        OrdersComponent,
        OrderItemsComponent
    ],
    imports: [
        CommonModule,
        LoadingModule,
        RouterModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        OrdersComponent,
        OrderItemsComponent
    ],
    providers: [ APP_PROVIDERS ],
})
export class OrdersModule {
}
