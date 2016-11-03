import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
    selector: 'as-admin-add-product',
    templateUrl: 'app/admin/templates/admin_add_product.html',
    styleUrls: [
        'app/admin/styles/admin_add_product.css'
    ]
})


export class AdminAddProductComponent implements OnInit {
    public errors: Object;
    public loading: boolean = true;
    private oid: string;
    ngOnInit() {
        // nothing here yet
    }
}
