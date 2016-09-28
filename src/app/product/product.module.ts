import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list.component';
import { LoadingModule } from '../directives/Loading/loading.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ProductDetailComponent,
        ProductListComponent
    ],
    imports: [
        CommonModule,
        LoadingModule,
        RouterModule
    ],
    exports: [
        ProductDetailComponent,
        ProductListComponent
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule {
}
