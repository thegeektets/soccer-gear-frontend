import { NgModule } from '@angular/core';
import { APP_PROVIDERS } from '../app.providers';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart.component';
import { CommonModule } from '@angular/common';
import { LoadingModule } from '../directives/Loading/loading.module';

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        LoadingModule,
        RouterModule
    ],
    exports: [
        CartComponent
    ],
    providers: [ APP_PROVIDERS ],
})
export class CartModule {
}
