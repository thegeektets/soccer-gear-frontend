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

import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailComponent } from './product-detail.component';
import { HttpModule } from '@angular/http';
import { APP_PROVIDERS } from '../../app.providers';
import { AuthService } from '../../Auth/services/auth.service';
import { AuthToken } from '../../services/AuthToken';
import { HttpSettingsService } from '../../services/HttpSettingsService';
import { UserService } from '../../Account/services/user.service';
import { SessionService } from '../../services/SessionService';
import { SettingsService } from '../../services/SettingsService';
import { Product } from '../models/product';
import { LoadingModule } from '../../directives/Loading/loading.module';
import { ProductService } from '../services/product.service';



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

describe('ProductDetailComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestRouterComponent,
                ProductDetailComponent
            ],
            imports: [
                RouterTestingModule,
                RouterModule,
                HttpModule,
                BrowserModule,
                LoadingModule
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
                SettingsService,
                ProductService
            ]
        });
    });


    let singleFixture = new Product({
        id: 1,
        title: 'MacBook Air',
        price: '899.99',
        description: 'A really lightweight and awesome notebook.',
        size: '13"',
        color: 'Silver',
        main_image: '',
        images: '',
        video: ''
    });

    it('should have product property', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<ProductDetailComponent>;
            fixture = TestBed.createComponent(ProductDetailComponent);
            fixture.componentInstance.product = singleFixture;
            fixture.detectChanges();

            let compiled = fixture.debugElement.nativeElement;
            expect(fixture.componentInstance.product).toBeDefined();

        });
    }));

    it('should display product title', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<ProductDetailComponent>;
            fixture = TestBed.createComponent(ProductDetailComponent);
            fixture.componentInstance.product = singleFixture;
            fixture.detectChanges();

            let compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h1.product-title').innerHTML).toMatch(fixture.componentInstance.product.title);

        });
    }));



});
