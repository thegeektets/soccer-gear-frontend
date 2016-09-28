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

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AuthModule,
        NavbarModule,
        HomeModule,
        TodolistModule,
        routing,
        HttpModule
    ],
    providers: [
        APP_PROVIDERS,
        appRoutingProviders,
        HttpSettingsService,
        SessionService,
        SettingsService,
        ANGULAR2_COOKIE_PROVIDERS
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
