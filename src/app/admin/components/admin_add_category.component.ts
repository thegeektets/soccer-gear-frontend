import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import {ListResponse} from '../../bases/models/ListResponse';
import {SessionService} from '../../services/SessionService';
import {CategoryService} from '../../product/services/category.service';
import {ToasterService} from 'angular2-toaster';

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
    private oid: string;
    private CategoryForm: FormGroup;

    constructor(private fb: FormBuilder,
        private _sessionService: SessionService,
        private _categoryService: CategoryService,
        private _toasterService: ToasterService) {
        this.buildForm();
    }
    ngOnInit() {
        this.getCategories();
    }
    buildForm() {
        this.CategoryForm = new FormGroup({
            title: new FormControl('', Validators.required),
            category: new FormControl('', Validators.nullValidator),
        });
    }
     getCategories() {
        this.loading = true;
        this._categoryService.getList().subscribe((res) => {
            this.categoryResponse = res;
            this.loading = false;
        });
    }

}
