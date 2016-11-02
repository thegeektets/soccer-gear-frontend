import { Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductListComponent } from './components/product-list.component';


export const ProductRoutes: Routes = [
    { path: '',  component: ProductListComponent },
    { path: 'products',  component: ProductListComponent },
    { path: 'product/:id',  component: ProductDetailComponent }
];
