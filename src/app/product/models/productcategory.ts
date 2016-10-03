import {BaseModel} from '../../bases/models/BaseModel';
import {Product} from './product';
import {Category} from './category';

export class ProductCategory extends BaseModel {

    public id: number;
    public product_id: Product[];
    public category_id: Category[];


    constructor (obj: Object) {
        super();
        for (let field in obj) {
            if (obj.hasOwnProperty(field)) {
                this[field] = obj[field];
            }
        }
    }
}
