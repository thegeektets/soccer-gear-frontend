import {BaseModel} from '../../bases/models/BaseModel';
import {Order} from './order';
import {Product} from '../../product/models/product';
import { User } from '../../Account/models/user';

export class OrderItem extends BaseModel {
    public id: number;
    public user: User;
    public order_id: number;
    public product_id: number;
    public order: Order;
    public product: Product;
    public price: number;
    public quantity: number;
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
