import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductService } from './services/product.service';
import { CartService } from '../cart/services/cart.service';
import { ProductListComponent } from './components/product-list.component';
import { LoadingModule } from '../directives/Loading/loading.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';


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
        Ng2Webstorage
    ],
    exports: [
        ProductDetailComponent,
        ProductListComponent
    ],
    providers: [
        ProductService,
        CartService
    ]
})
export class ProductModule {
}
