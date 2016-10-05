import { NgModule } from '@angular/core';
import { APP_PROVIDERS } from '../app.providers';
import { CartComponent } from './components/cart.component';
import { CommonModule } from '@angular/common';
import { LoadingModule } from '../directives/Loading/loading.module';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        LoadingModule
    ],
    exports: [
    ],
    providers: [ APP_PROVIDERS ],
})
export class CartModule {
}
