import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
    selector: 'as-admin-dashboard',
    templateUrl: 'app/admin/templates/admin_dashboard.html',
    styleUrls: [
        'app/admin/styles/admin_dashboard.css'
    ]
})


export class AdminDashboardComponent implements OnInit {
    public errors: Object;
    public loading: boolean = true;
    private oid: string;
    ngOnInit() {
        // nothing here yet
    }
}
