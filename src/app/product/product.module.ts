import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { CartService } from '../cart/services/cart.service';
import { ProductListComponent } from './components/product-list.component';
import { LoadingModule } from '../directives/Loading/loading.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        ProductDetailComponent,
        ProductListComponent
    ],
    imports: [
        CommonModule,
        LoadingModule,
        RouterModule,
        BrowserModule,
        Ng2Webstorage,
        FormsModule
    ],
    exports: [
        ProductDetailComponent,
        ProductListComponent
    ],
    providers: [
        ProductService,
        CategoryService,
        CartService
    ]
})
export class ProductModule {
}
