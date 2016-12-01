import { Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductListComponent } from './components/product-list.component';
import {HomeComponent} from '../home/home.component';


export const ProductRoutes: Routes = [
    { path: '',  component: HomeComponent },
    { path: 'products',  component: ProductListComponent },
    { path: 'product/:id',  component: ProductDetailComponent }
];
