import {
    RouterTestingModule
} from '@angular/router/testing';
import {
    async,
    TestBed,
    ComponentFixture, inject
} from '@angular/core/testing';
import { provideRoutes, Routes, RouterModule } from '@angular/router';

import { Product } from '../models/product';
import { ProductService } from './product.service';
import { HttpModule } from '@angular/http';
import { HttpSettingsService } from '../../services/HttpSettingsService';
import { SessionService } from '../../services/SessionService';
import { SettingsService } from '../../services/SettingsService';
import { AuthToken } from '../../services/AuthToken';



let config: Routes = [
];

describe('ProductService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
            ],
            imports: [
                RouterTestingModule,
                RouterModule,
                HttpModule,
            ],
            providers: [
                provideRoutes(config),
                ProductService,
                SessionService,
                SettingsService,
                AuthToken,
                HttpSettingsService
            ]
        });
    });


    it('should have a _basePath that is defined', async(() => {
        inject([ProductService], (_productService: ProductService) => {
            expect(_productService._basePath).toBeDefined();
        });
    }));

    it('should have a _basePath that is not blank', inject([ProductService], (_productService: ProductService) => {
        expect(_productService._basePath !== '').toBeTruthy();
    }));

    it('should have a _basePath that ends with a "/"', inject([ProductService], (_productService: ProductService) => {
        expect(_productService._basePath.charAt(_productService._basePath.length - 1) === '/').toBeTruthy();
    }));

    it('should return an observable from .getList method', async(() => {
        inject([ProductService], (_productService: ProductService) => {
            let o = _productService.getList();
            console.log(o);
            expect(o.subscribe).toBeDefined();
        });
    }));

    it('should return an observable from .get method', async(() => {
        inject([ProductService], (_productService: ProductService) => {
            let o = _productService.get('1');
            console.log(o);
            expect(o.subscribe).toBeDefined();
        });
    }));




});
