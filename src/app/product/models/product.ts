import {BaseModel} from '../../bases/models/BaseModel';
import { ENV } from '../../shared/constant/env';

export class Product extends BaseModel {

    public id: number;
    public title: string;
    public price: number;
    public description: string;
    public attributes: any;
    public attribute_fields: any;
    public main_image: string;
    public images: any[];
    public video: any[];
    public category: any[];

    constructor (obj: Object) {
       super();
       for (let field in obj) {
           if (obj.hasOwnProperty(field)) {
               this[field] = obj[field];
           }
       }
    }

    getMainImage() {
        if (typeof this.main_image === 'undefined') {
            return ENV.DEFAULT_PRODUCT_IMAGE;
        }
        if (this.main_image === null || this.main_image === '') {
            return ENV.DEFAULT_PRODUCT_IMAGE;
        }
        return ENV.UPLOADS_URL + this.main_image;
    }
}
