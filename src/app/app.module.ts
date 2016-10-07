import { NgModule } from '@angular/core';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { AuthModule } from './Auth/auth.module';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpSettingsService } from './services/HttpSettingsService';
import { SessionService } from './services/SessionService';
import { SettingsService } from './services/SettingsService';
import { AuthService } from './Auth/services/auth.service';
import { AuthToken } from './services/AuthToken';
import { ProductModule } from './product/product.module';
import { AccountModule } from './Account/account.module';
import { CartModule } from './cart/cart.module';
import { CartService } from './cart/services/cart.service';
import { UserService } from './Account/services/user.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AuthModule,
        AccountModule,
        ProductModule,
        NavbarModule,
        HomeModule,
        routing,
        HttpModule,
        BrowserModule,
        CartModule
    ],
    providers: [
        APP_PROVIDERS,
        AuthService,
        AuthToken,
        appRoutingProviders,
        HttpSettingsService,
        UserService,
        SessionService,
        CartService,
        SettingsService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
