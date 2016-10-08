import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart/services/cart.service';
import { ToasterService } from 'angular2-toaster';

interface Attributes {
    size?: number;
    color?: string;
}
interface RouteParams {
    id: string;
}

@Component({
    selector: 'as-product-detail',
    templateUrl: 'app/product/templates/product-detail.html',
    styleUrls: [
        'app/product/styles/product-detail.css'
    ]
})
export class ProductDetailComponent implements OnInit {
    public product: Product;
    public loading: boolean = true;
    public chosen_attributes: Attributes = {};

    constructor(
        private _productService: ProductService,
        private _activatedRoute: ActivatedRoute,
        private _cart: CartService,
        private _toasterService: ToasterService

    ) {
        this._activatedRoute.params.subscribe((res: RouteParams) => {
            if (res.hasOwnProperty('id')) {
                this.getProducts(res.id);
            }
        });
    }

    ngOnInit() {
    // this.product = this._productService.ge
    }

    getProducts(id) {
        this._productService.get(id).subscribe((res) => {
            this.product = res;
            this.loading = false;
        });
    }
    addToCart(product: Product) {
        this._cart.add(product.id, this.chosen_attributes).subscribe((res) => {
            this._toasterService.pop('success', 'Added To Cart', product.title);
        });
    }
}
