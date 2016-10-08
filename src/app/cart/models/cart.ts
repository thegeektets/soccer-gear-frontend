import {BaseModel} from '../../bases/models/BaseModel';
import {Product} from '../../product/models/product';

export class CartItem {
    public id: number;
    public product_id: number;
    public product: Product;
    public quantity: number;
    public cost: number;
    public cart_id: number;
    public chosen_attributes: any;

    constructor (obj: Object) {
        for (let field in obj) {
            if (obj.hasOwnProperty(field)) {
                if (field === 'product') {
                    this[field] = new Product(obj[field]);
                } else {
                    this[field] = obj[field];
                }
            }
        }
    }

    getChosenAttributesAsArray() {
        let toReturn = [];
        for (let field in this.chosen_attributes) {
            if (this.chosen_attributes.hasOwnProperty(field)) {
                toReturn.push({
                    field: field,
                    value: this.chosen_attributes[field]
                });
            }
        }
        return toReturn;
    }

}

export class Cart {
    public id: number;
    public items: CartItem[] = [];
    public total_quantity: number;
    public subtotal: number;
    public user_id: number;
    public session: string;

    constructor (obj: Object) {
        for (let field in obj) {
            if (obj.hasOwnProperty(field)) {
                if (field === 'items') {
                    let list = [];
                    for (let item of obj[field]) {
                        list.push(new CartItem(item));
                    }
                    this[field] = list;
                } else {
                    this[field] = obj[field];
                }
            }
        }
    }
}
