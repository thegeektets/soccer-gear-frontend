import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import {ListResponse} from '../../bases/models/ListResponse';
import {SessionService} from '../../services/SessionService';
import {CategoryService} from '../../product/services/category.service';
import {ToasterService} from 'angular2-toaster';
import {Category} from '../../product/models/category';

@Component({
    selector: 'as-admin-add-product',
    templateUrl: 'app/admin/templates/admin_add_category.html',
    styleUrls: [
        'app/admin/styles/admin_add_category.css'
    ],
    providers: [FormBuilder]
})


export class AdminAddCategoryComponent implements OnInit {
    public errors: Object;
    public loading: boolean = true;
    public categoryResponse: ListResponse;
    public category: Category;
    private oid: string;
    private CategoryForm: FormGroup;

    constructor(private fb: FormBuilder,
        private _sessionService: SessionService,
        private _categoryService: CategoryService,
        private _toasterService: ToasterService
    ) {
        this.buildForm();
    }
    ngOnInit() {
        this.getCategories();
    }
    buildForm() {
        this.CategoryForm = new FormGroup({
            title: new FormControl('', Validators.required),
            parent: new FormControl(''),
        });
    }
     getCategories() {
        this.loading = true;
        this._categoryService.getList().subscribe((res) => {
            this.categoryResponse = res;
            this.loading = false;
        });
    }
    addCategory() {
        if (this._sessionService.user !== null) {
            if (this._sessionService.user.is_admin ||
                this._sessionService.user.is_staff ||
                this._sessionService.user.is_superuser
            ) {
                this.loading = true;
                this._categoryService.post(JSON.stringify(this.CategoryForm.getRawValue())).subscribe((res) => {
                    this.loading = false;
                    this.category = res;
                    this._toasterService.pop('success', 'Category Added', this.category.title);
                }, (errors) => {
                                this.loading = false;
                                this.errors = errors;
                                console.log(this.errors);
                                this._toasterService.pop('warning', 'Failed to Add Category', 'Internal Server Error');
                            });
            }
        }
        return false;
    }


}
