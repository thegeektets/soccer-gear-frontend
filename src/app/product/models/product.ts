import {BaseModel} from '../../bases/models/BaseModel';

export class Product extends BaseModel {

    public id: number;
    public title: string;
    public price: number;
    public description: string;
    public attributes: any;
    public attribute_fields: any;
    public main_image: any[];
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
}
