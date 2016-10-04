import {BaseModel} from '../../bases/models/BaseModel';

export class Order extends BaseModel {

    public id: number;
    public status: string ;
    public payment: string;
    public cost: string ;
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
