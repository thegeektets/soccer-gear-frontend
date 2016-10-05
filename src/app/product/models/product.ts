import {BaseModel} from '../../bases/models/BaseModel';

export class Product extends BaseModel {

    public id: number;
    public title: string;
    public price: string;
    public description: string;
    public size: string;
    public color: string;
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
