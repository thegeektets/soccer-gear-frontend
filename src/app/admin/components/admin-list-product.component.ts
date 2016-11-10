import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ProductService } from '../../product/services/product.service';
import { CategoryService } from '../../product/services/category.service';
import { Product } from '../../product/models/product';
import { SessionService } from '../../services/SessionService';
import { ToasterService } from 'angular2-toaster';
import { ListResponse } from '../../bases/models/ListResponse';

@Component({
    selector: 'as-admin-list-product',
    templateUrl: 'app/admin/templates/admin_list_product.html',
    styleUrls: [
        'app/admin/styles/admin_list_product.css'
    ]
})


export class AdminListProductComponent implements OnInit {
    public errors: Object;
    public loading: boolean = true;
    public product: Product;
    public productsResponse: ListResponse;
    private oid: string;
    private productForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private _sessionService: SessionService,
        private _productService: ProductService,
        private _categoryService: CategoryService,
        private _toasterService: ToasterService
                ) {
        }
    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.loading = true;
        this._productService.getList().subscribe((res) => {
            this.productsResponse = res;
            this.loading = false;
        });
    }


}
