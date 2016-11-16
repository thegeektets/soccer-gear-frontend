import {BaseModel} from '../../bases/models/BaseModel';


export class Category extends BaseModel {

    public id: number;
    public title: string;
    public parent: string;
    public parent_id: number = null;
    public categories: Category[] = [];

 constructor (obj: Object) {
        super();
        for (let field in obj) {
            if (obj.hasOwnProperty(field)) {
                if (field === 'categories') {
                    this.categories = [];
                    for (let cat of obj[field]) {
                        this.categories.push(new Category(cat));
                    }
                } else {
                    this[field] = obj[field];
                }
            }
        }
    }
}
