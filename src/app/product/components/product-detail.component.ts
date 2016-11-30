import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart/services/cart.service';
import { ToasterService } from 'angular2-toaster';
import { SessionService } from '../../services/SessionService';
import { ENV } from '../../shared/constant/env';

interface Attributes {
    size?: number;
    color?: string;
}
interface RouteParams {
    id: string;
}

@Component({
    selector: 'as-product-detail',
    templateUrl: 'app/product/templates/product-detail.html',
    styleUrls: [
        'app/product/styles/product-detail.css'
    ]
})
export class ProductDetailComponent implements OnInit {
    public product: Product;
    public productUpdates: any = {};
    public loading: boolean = true;
    public chosen_attributes: Attributes = {};
    public showSave: boolean = false;
    public mainImage: string;
    public otherImages: any = {};

    constructor(
        private _productService: ProductService,
        private _activatedRoute: ActivatedRoute,
        private _cart: CartService,
        private _sessionService: SessionService,
        private _toasterService: ToasterService

    ) {
        this._activatedRoute.params.subscribe((res: RouteParams) => {
            if (res.hasOwnProperty('id')) {
                this.getProducts(res.id);
            }
        });
    }

    ngOnInit() {
    // this.product = this._productService.ge
    }

    getProducts(id) {
        this._productService.get(id).subscribe((res) => {
            this.product = res;
            this.mainImage = this.product.getMainImage();
            if (String(this.product.images) !== '' && String(this.product.images) !== '-') {
                this.otherImages = JSON.parse(String(this.product.images));
            } else {
                this.otherImages = '';
            }
            this.loading = false;
        });
    }

    changeMainImage(image) {
        this.mainImage = image;
    }

    getOtherImage(image) {
        return ENV.UPLOADS_URL + image;
    }
    addToCart(product: Product) {
        this._cart.add(product.id, this.chosen_attributes).subscribe((res) => {
            this._toasterService.pop('success', 'Added To Cart', product.title);
        });
    }

    productChanged($event, field) {

        if (this._sessionService.user !== null) {
            if (this._sessionService.user.is_admin ||
                this._sessionService.user.is_staff ||
                this._sessionService.user.is_superuser
            ) {
                this.showSave = true;
                // console.log(field, $event.target.innerHTML);
                this.productUpdates[field] = $event.target.innerHTML;
            }
        }
    }

    saveChanges() {
        if (this._sessionService.user !== null) {
            if (this._sessionService.user.is_admin ||
                this._sessionService.user.is_staff ||
                this._sessionService.user.is_superuser
            ) {
                this.loading = true;
                let prod = new Product(this.product);
                for (let field in this.productUpdates) {
                    if (this.productUpdates.hasOwnProperty(field)) {
                        prod[field] = this.productUpdates[field].replace(/style=".*?"/ig, '');
                    }
                }
                this._productService.put(prod.id, JSON.stringify(prod)).subscribe((res) => {
                    this.loading = false;
                    this.product = res;
                    this.showSave = false;
                    this._toasterService.pop('success', 'Saved changes', this.product.title);
                });
            }
        }
    }
}
