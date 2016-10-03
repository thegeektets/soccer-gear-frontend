import {
    RouterTestingModule
} from '@angular/router/testing';
import {
    async,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';
import { provideRoutes, Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Component, ApplicationRef } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SessionService } from './services/SessionService';
import { UserService } from './Account/services/user.service';
import { HttpModule } from '@angular/http';
import { APP_PROVIDERS } from './app.providers';
import { AuthService } from './Auth/services/auth.service';
import { AuthToken } from './services/AuthToken';
import { HttpSettingsService } from './services/HttpSettingsService';
import { SettingsService } from './services/SettingsService';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'as-test-cmp',
    template: '<div class="title">Hello test</div>'
})
class TestRouterComponent {
}

let config: Routes = [
    {
        path: '', component: TestRouterComponent
    }
];

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestRouterComponent,
                AppComponent,
                NavbarComponent
            ],
            imports: [
                RouterTestingModule,
                RouterModule,
                HttpModule,
                BrowserModule
            ],
            providers: [
                provideRoutes(config),
                ApplicationRef,
                APP_PROVIDERS,
                AuthService,
                AuthToken,
                HttpSettingsService,
                UserService,
                SessionService,
                SettingsService
            ]
        });
    });

    it('should have main app content', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<AppComponent>;
            fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();

            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();

            // TODO: find a way to compile the routed component
            // expect(compiled.querySelector('div.title')).toMatch('Hello world');
        });
    }));


    it('should show login when not authenticated', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<AppComponent>;
            fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();

            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();

            expect(compiled.querySelector('ul.navbar-right li a').innerHTML).toMatch('Login');
        });
    }));

    it('should show logout when authenticated', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<AppComponent>;
            fixture = TestBed.createComponent(AppComponent);

            fixture.componentInstance.isAuthenticated = true;

            fixture.detectChanges();

            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();

            expect(compiled.querySelector('ul.navbar-right li ul').innerHTML).toMatch('Logout');
        });
    }));

    it('should show username in nav bar when authenticated', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<AppComponent>;
            fixture = TestBed.createComponent(AppComponent);

            fixture.componentInstance.isAuthenticated = true;
            fixture.componentInstance.userDisplayName = 'Test User';

            fixture.detectChanges();

            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();

            expect(compiled.querySelector('ul.navbar-right li.dropdown a ').innerHTML).toMatch(fixture.componentInstance.userDisplayName);
        });
    }));


});
