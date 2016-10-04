import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

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

    private loading: boolean = false;

    constructor(
        private _productService: ProductService,
        private _activatedRoute: ActivatedRoute
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
