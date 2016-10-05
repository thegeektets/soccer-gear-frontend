import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart/services/cart.service';


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
<<<<<<< HEAD
    private loading: boolean = false;
=======

    private loading: boolean = true;
>>>>>>> 8542198bd5a734c06d5e8983ffbbe9ad3e644b96


    constructor(
        private _productService: ProductService,
        private _activatedRoute: ActivatedRoute,
        private _cart: CartService

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
}
