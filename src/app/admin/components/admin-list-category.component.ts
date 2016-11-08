import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import {ListResponse} from '../../bases/models/ListResponse';
import {SessionService} from '../../services/SessionService';
import {CategoryService} from '../../product/services/category.service';
import {ToasterService} from 'angular2-toaster';
import {Category} from '../../product/models/category';

@Component({
    selector: 'as-admin-add-product',
    templateUrl: 'app/admin/templates/admin_list_category.html',
    styleUrls: [],
    providers: [FormBuilder]
})


export class AdminListCategoryComponent implements OnInit {
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
    }
    ngOnInit() {
        this.getCategories();
    }

     getCategories() {
        this.loading = true;
        this._categoryService.getList().subscribe((res) => {
            this.categoryResponse = res;
            this.loading = false;
        });
    }

}
