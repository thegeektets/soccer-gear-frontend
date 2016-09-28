import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {ListResponse} from '../../bases/models/ListResponse';

@Component({
    selector: 'as-product-detail',
    templateUrl: 'app/product/templates/product-list.html',
    styleUrls: [
        'app/product/styles/product-list.css'
    ]
})
export class ProductListComponent implements OnInit {

    public productsResponse: ListResponse;
    private loading: boolean = true;

    constructor(private _productService: ProductService) {
        //
    }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this._productService.getList().subscribe((res) => {
            this.productsResponse = res;
            this.loading = false;
        });
    }
}
