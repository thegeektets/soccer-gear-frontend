import {BaseModel} from '../../bases/models/BaseModel';
import {Order} from './order';
import {Product} from '../../product/models/product';

export class OrderItem extends BaseModel {
    public id: number;
    public order_id: Order[];
    public product_id: Product[];
    public price: string;
    public quantity: string;
    public user_id: number;

    constructor (obj: Object) {
        super();
        for (let field in obj) {
            if (obj.hasOwnProperty(field)) {
                this[field] = obj[field];
            }
        }
    }
}
