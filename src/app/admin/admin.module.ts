import { NgModule } from '@angular/core';
import { APP_PROVIDERS } from '../app.providers';
import { AdminDashboardComponent } from './components/admin-dashboard.component';
import { AdminAddProductComponent } from './components/admin-add-product.component';
import { LoadingModule } from '../directives/Loading/loading.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AdminDashboardComponent,
        AdminAddProductComponent
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
        AdminAddProductComponent
    ],
    providers: [ APP_PROVIDERS ],
})
export class AdminModule {
}
