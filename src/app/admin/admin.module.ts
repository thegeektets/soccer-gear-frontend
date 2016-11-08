import { NgModule } from '@angular/core';
import { APP_PROVIDERS } from '../app.providers';
import { AdminDashboardComponent } from './components/admin-dashboard.component';
import { AdminAddProductComponent } from './components/admin-add-product.component';
import { AdminListProductComponent} from './components/admin-list-product.component';
import { AdminListOrdersComponent} from './components/admin-list-orders.component';
import { AdminListPaymentsComponent} from './components/admin-list-payments.component';
import { AdminListUsersComponent} from './components/admin-list-users.component';
import { LoadingModule } from '../directives/Loading/loading.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAddCategoryComponent} from './components/admin_add_category.component';


@NgModule({
    declarations: [
        AdminDashboardComponent,
        AdminAddProductComponent,
        AdminListProductComponent,
        AdminAddCategoryComponent,
        AdminListPaymentsComponent,
        AdminListOrdersComponent,
        AdminListUsersComponent
    ],
    imports: [
        CommonModule,
        LoadingModule,
        RouterModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        AdminDashboardComponent,
        AdminAddProductComponent,
        AdminListProductComponent,
        AdminAddCategoryComponent,
        AdminListPaymentsComponent,
        AdminListUsersComponent,
        AdminListOrdersComponent
    ],
    providers: [ APP_PROVIDERS ],
})
export class AdminModule {
}
