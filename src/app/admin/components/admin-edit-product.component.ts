import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import {ProductService} from '../../product/services/product.service';
import {CategoryService} from '../../product/services/category.service';
import {Product} from '../../product/models/product';
import {SessionService} from '../../services/SessionService';
import {ToasterService} from 'angular2-toaster';
import {ListResponse} from '../../bases/models/ListResponse';
import {Category} from '../../product/models/category';
import { ENV } from '../../shared/constant/env';

interface RouteParams {
    id: string;
}
@Component({
    selector: 'as-admin-add-product',
    templateUrl: 'app/admin/templates/admin_edit_product.html',
    styleUrls: [
        'app/admin/styles/admin_edit_product.css'
    ],
    providers: [FormBuilder]
})
export class AdminEditProductComponent implements OnInit {
    public errors: Object;
    public loading: boolean = true;
    public loadingcats: boolean = true;
    public product: Product;
    public category: Category;
    public categoryResponse: ListResponse;
    private productForm: FormGroup;
    private uploadFile: any;
    private multiFiles: any = [];
    private imageUploaded: boolean = false;
    private allUploaded: boolean = false;
    private hasBaseDropZoneOver: boolean = false;
    private options: Object  = {
        url: ENV.UPLOAD_URL
    };

    constructor(private fb: FormBuilder,
                private _sessionService: SessionService,
                private _productService: ProductService,
                private _categoryService: CategoryService,
                private _toasterService: ToasterService,
                private _activatedRoute: ActivatedRoute) {
        this._activatedRoute.params.subscribe((res: RouteParams) => {
            if (res.hasOwnProperty('id')) {
                this.getProducts(res.id);
            }
        });
        this.buildForm();
    }

    ngOnInit() {
        this.getCategories();
    }

    buildForm() {
        this.productForm = new FormGroup({
            title: new FormControl(''),
            price: new FormControl(''),
            description: new FormControl(''),
            category: new FormControl(''),
            images: new FormControl('-'),
        });
    }

    getCategories() {
        this._categoryService.getList().subscribe((res) => {
            this.categoryResponse = res;
            this.loadingcats = false;
        });
    }

    getProducts(id) {
        this.loading = true;
        this._productService.get(id).subscribe((res) => {
            this.product = res;
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

    handlemultiUpload(data): void {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.multiFiles.push(data.datafile);
            console.log(this.multiFiles);
            this.allUploaded = true;
        }
    }

    fileOverBsase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    editProduct() {
        this.loading = true;
        let productData = this.productForm.getRawValue();
        if (this.imageUploaded) {
            productData['datafile'] = this.uploadFile;
            productData['datafile_id'] = this.uploadFile.id;
        } else {
            productData['datafile'] = this.product.datafile;
            productData['datafile_id'] = this.product.datafile.id;
        }
        if (this.allUploaded) {
            productData['images'] = JSON.stringify(this.multiFiles);
        }
        this._productService.put(this.product.id, JSON.stringify(productData)).subscribe((res) => {
            this.loading = true;
            this.product = res;
            this._toasterService.pop('success', 'Edited Changes for ', this.product.title);
            this.loading = false;
        });
        return false;
    }
}
