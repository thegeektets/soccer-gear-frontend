import { NgModule } from '@angular/core';
import { HomeComponent } from './index';
import {CommonModule} from '@angular/common';
import {LoadingModule} from '../directives/Loading/loading.module';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ProductService} from '../product/services/product.service';
import {CategoryService} from '../product/services/category.service';
import {CartService} from '../cart/services/cart.service';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        LoadingModule,
        RouterModule,
        BrowserModule,
        FormsModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [
        ProductService,
        CategoryService,
        CartService
    ]
})
export class HomeModule {
}
