import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import {ListResponse} from '../../bases/models/ListResponse';
import {SessionService} from '../../services/SessionService';
import {CategoryService} from '../../product/services/category.service';
import {ToasterService} from 'angular2-toaster';
import {Category} from '../../product/models/category';
import {ActivatedRoute} from '@angular/router';

interface RouteParams {
    id: string;
}

@Component({
    selector: 'as-admin-add-product',
    templateUrl: 'app/admin/templates/admin_edit_category.html',
    styleUrls: [
        'app/admin/styles/admin_edit_category.css'
    ],
    providers: [FormBuilder]
})


export class AdminEditCategoryComponent implements OnInit {
    public errors: Object;
    public loading: boolean = true;
    public categoryResponse: ListResponse;
    public category: Category;
    private oid: string;
    private EditCategory: FormGroup;

    constructor(private fb: FormBuilder,
                private _sessionService: SessionService,
                private _categoryService: CategoryService,
                private _activatedRoute: ActivatedRoute,
                private _toasterService: ToasterService) {
        this._activatedRoute.params.subscribe((res: RouteParams) => {
            if (res.hasOwnProperty('id')) {
                this.getCategories(res.id);
            }
        });
         this.buildForm();
    }

    ngOnInit() {
        // this.getCategories(id);
    }

    buildForm() {
        this.EditCategory = new FormGroup({
            title: new FormControl('', Validators.required),
            parent_id: new FormControl(''),
            parent: new FormControl(''),
        });
    }

    getCategories(id) {
        this._categoryService.get(id).subscribe((res) => {
            this.category = res;
            this.loading = false;
        });
    }

    editCategory() {
        this._categoryService.put(this.category.id, JSON.stringify(this.EditCategory.getRawValue())).subscribe((res) => {
            this.loading = true;
            this.category = res;
            this._toasterService.pop('success', 'Edited Changes', this.category.title);
            this.loading = false;
        });
    }
}
