import { NgModule } from '@angular/core';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { TodolistModule } from './todolist/todolist.module';
import { AuthModule } from './Auth/auth.module';
import { HttpModule } from '@angular/http';
import { HttpSettingsService } from './services/HttpSettingsService';
import { SessionService } from './services/SessionService';
import { SettingsService } from './services/SettingsService';
import { ANGULAR2_COOKIE_PROVIDERS } from 'angular2-cookie/core';
import { AuthService } from './Auth/services/auth.service';
import { AuthToken } from './services/AuthToken';
import { ProductModule } from './product/product.module';
import { UserService } from './Account/services/user.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AuthModule,
        ProductModule,
        NavbarModule,
        HomeModule,
        TodolistModule,
        routing,
        HttpModule
    ],
    providers: [
        APP_PROVIDERS,
        AuthService,
        AuthToken,
        appRoutingProviders,
        HttpSettingsService,
        UserService,
        SessionService,
        SettingsService,
        ANGULAR2_COOKIE_PROVIDERS
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
