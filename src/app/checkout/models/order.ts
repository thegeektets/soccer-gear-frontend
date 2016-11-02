import {BaseModel} from '../../bases/models/BaseModel';
import {Payment} from '../../checkout/models/payment';
import { User } from '../../Account/models/user';

export class Order extends BaseModel {

    public user: User;
    public status: string ;
    public payment: Payment;
    public cost: string ;
    public user_id: any;

    constructor (obj: Object) {
        super();
        for (let field in obj) {
            if (obj.hasOwnProperty(field)) {
                this[field] = obj[field];
            }
        }
    }
}
export class NewOrder extends BaseModel {

    public user: User;
    public status: string ;
    public cost: string ;
    public user_id: any;

    constructor (obj: Object) {
        super();
        for (let field in obj) {
            if (obj.hasOwnProperty(field)) {
                this[field] = obj[field];
            }
        }
    }
}
