import {BaseModel} from '../../bases/models/BaseModel';
import {Product} from '../../product/models/product';

export class CartItem {
    public product: Product;
    public quantity: number;
}
