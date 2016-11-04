import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

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
    private oid: string;
    private productForm: FormGroup;
    constructor(private fb: FormBuilder) {
        this.buildForm();
    }
    ngOnInit() {
        // nothing here yet
    }
    buildForm() {
        this.productForm = new FormGroup({
            Title: new FormControl('', Validators.required),
            Price: new FormControl('', Validators.required),
            Description: new FormControl('', Validators.required),
        });
    }
}
