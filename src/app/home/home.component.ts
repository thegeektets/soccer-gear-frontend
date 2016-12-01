import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product/services/product.service';
import {CategoryService} from '../product/services/category.service';
import {CartService} from '../cart/services/cart.service';
import {ToasterService} from 'angular2-toaster';
import {Product} from '../product/models/product';
import {ListResponse} from '../bases/models/ListResponse';

@Component({
    selector: 'as-home',
    templateUrl: 'app/home/home.html',
    styleUrls: [
        'app/home/home.css'
    ]
})
export class HomeComponent implements OnInit {
    public searchterm: string = '';
    public productsResponse: ListResponse;
    public categoryResponse: ListResponse;
    public product: Product;
    public currentCategory;
    private loadingProducts: boolean = true;
    private loadingCategories: boolean = true;
    constructor (
        private _productService: ProductService,
        private _categoryService: CategoryService,
        private _cart: CartService,
        private _toasterService: ToasterService
    ) {
        }
    ngOnInit() {
        this.getCategories();
        this.getProducts();
    }
        getCategories() {
        this.loadingCategories = true;
        this._categoryService.getList().subscribe((res) => {
            this.categoryResponse = res;
            this.loadingCategories = false;
        });
    }
    getProducts() {
        this.loadingProducts = true;
        this._productService.getList().subscribe((res) => {
            this.productsResponse = res;
            this.loadingProducts = false;
        });
    }
    addToCart(product: Product) {
        this._cart.add(product.id, {}).subscribe((res) => {
            this._toasterService.pop('success', 'Added To Cart', product.title);
        });
    }
    search(searchTerm: string) {
        this.loadingProducts = true;
        let params = {};
        if (typeof this.currentCategory !== 'undefined') {
            let field = 'category';
            params[field] = this.currentCategory.id;
        }
        if (searchTerm !== '') {
            let field = 'search';
            params[field] = searchTerm;
        }
        this._productService.getList(params).subscribe((res) => {
            this.productsResponse = res;
            this.loadingProducts = false;
        });
    }

    searchKeyPressed($event) {
        if ($event.keyCode === 13) {
            this.search($event.target.value);
        }
    }

    activateCategory(cat) {
        if (cat === null) {
            this.currentCategory = undefined;
            this.search(this.searchterm);
        } else {
            this.currentCategory = cat;
            this.search(this.searchterm);
        }
    }
}
