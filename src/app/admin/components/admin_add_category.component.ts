import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

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
    public loading: boolean = false;
    private oid: string;
    private CategoryForm: FormGroup;
    constructor(private fb: FormBuilder) {
        this.buildForm();
    }
    ngOnInit() {
        // nothing here yet
    }
    buildForm() {
        this.CategoryForm = new FormGroup({
            Title: new FormControl('', Validators.required),
        });
    }
}
