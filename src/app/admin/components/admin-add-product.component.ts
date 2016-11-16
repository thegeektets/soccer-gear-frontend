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
    selector: 'as-admin-add-product',
    templateUrl: 'app/admin/templates/admin_add_product.html',
    styleUrls: [
        'app/admin/styles/admin_add_product.css'
    ],
    providers: [FormBuilder]
})


export class AdminAddProductComponent implements OnInit {
    public errors: Object;
    public loading: boolean = true;
    public product: Product;
    public categoryResponse: ListResponse;
    private productForm: FormGroup;
    private uploadFile: any;
    private imageUploaded: boolean = false;
    private hasBaseDropZoneOver: boolean = false;
    private options: Object  = {
        url: 'http://www.localhost:8000/api/v1/fileupload/'
    };
    constructor(
        private fb: FormBuilder,
        private _sessionService: SessionService,
        private _productService: ProductService,
        private _categoryService: CategoryService,
        private _toasterService: ToasterService
                ) {
        this.buildForm();
    }
    ngOnInit() {
        this.getCategories();
    }
    buildForm() {
        this.productForm = new FormGroup({
            title: new FormControl('', Validators.required),
            price: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            category: new FormControl('', Validators.required),
            images: new FormControl('-', Validators.required),
        });
    }
    getCategories() {
        this.loading = true;
        this._categoryService.getList().subscribe((res) => {
            this.categoryResponse = res;
            this.loading = false;
        });
    }
    handleUpload(data): void {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
            this.imageUploaded = true;
        }
    }

    fileOverBsase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }
    addProduct() {
        if (this._sessionService.user !== null) {
            if (this._sessionService.user.is_admin ||
                this._sessionService.user.is_staff ||
                this._sessionService.user.is_superuser
            ) {
                this.loading = true;
                let productData = this.productForm.getRawValue();

                if (this.imageUploaded) {
                     productData['datafile'] = this.uploadFile;
                     productData['datafile_id'] = this.uploadFile.id;
                }

                this._productService.post(JSON.stringify(productData)).subscribe((res) => {
                    this.loading = false;
                    this.product = res;
                    this._toasterService.pop('success', 'Product Added', this.product.title);
                }, (errors) => {
                                this.loading = false;
                                this.errors = errors;
                                console.log(this.errors);
                                this._toasterService.pop('warning', 'Failed to Add Product', 'Internal Server Error');
                            });
            }
        }
        return false;
    }
}
