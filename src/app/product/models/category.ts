import {BaseModel} from '../../bases/models/BaseModel';


export class Category extends BaseModel {

    public id: number;
    public title: string;

 constructor (obj: Object) {
        super();
        for (let field in obj) {
            if (obj.hasOwnProperty(field)) {
                this[field] = obj[field];
            }
        }
    }
}
