import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {CategoryService} from '../services/category.service';
import {Product} from '../models/product';
import {ListResponse} from '../../bases/models/ListResponse';
import {CartService} from '../../cart/services/cart.service';

@Component({
    selector: 'as-product-detail',
    templateUrl: 'app/product/templates/product-list.html',
    styleUrls: [
        'app/product/styles/product-list.css'
    ]
})
export class ProductListComponent implements OnInit {
    public searchterm: string = '';
    public productsResponse: ListResponse;
    public categoryResponse: ListResponse;
    public product: Product;
    private loading: boolean = true;
    constructor (
        private _productService: ProductService,
        private _categoryService: CategoryService,
        private _cart: CartService
        ) {
        }

    ngOnInit() {
        this.getProducts();
    }

    getCategories() {
        this._categoryService.getList().subscribe((res) => {
            this.categoryResponse = res;
            this.loading = false;
        });
    }
    getProducts() {
        this._productService.getList().subscribe((res) => {
            this.productsResponse = res;
            this.loading = false;
        });
    }
    addToCart(product: Product) {
        this._cart.add(product.id, {}).subscribe((res) => {
            //
        });
    }
    search(item: string) {
        this._productService.getList({search: item}).subscribe((res) => {
            this.productsResponse = res;
            this.loading = false;
        });
    }
}
