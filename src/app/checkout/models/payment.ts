import {BaseModel} from '../../bases/models/BaseModel';

export class Payment extends BaseModel {

    public id: number;
    public mpesa_code: string;
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
