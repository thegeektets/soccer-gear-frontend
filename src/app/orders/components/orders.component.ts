import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { CartService } from '../../cart/services/cart.service';
import { UserService} from '../../Account/services/user.service';
import { User } from '../../Account/models/user';
import { PaymentService } from '../../checkout/services/payment.service';
import { OrderService } from '../../checkout/services/order.service';
import { OrderItemService } from '../../checkout/services/orderItem.service';
import { Product } from '../../product/models/product';
import { NewOrder, Order } from '../../checkout/models/order';
import { OrderItem } from '../../checkout/models/order_item';
import { Payment } from '../../checkout/models/payment';
import { Cart, CartItem } from '../../cart/models/cart';

@Component({
    selector: 'as-orders',
    templateUrl: 'app/orders/templates/orders.html',
    styleUrls: [
        'app/orders/styles/orders.css'
    ],
    providers: [FormBuilder]
})

export class OrdersComponent implements OnInit {
    public cart: Cart;
    public errors: Object;
    public loading: boolean = true;
    public quantityOptions: number[] = [];
    private form: FormGroup;
    private transactionForm: FormGroup;
    private userMpesaPhone: string;
    private userShippingAddress: string;
    private paymentComplete = false;
    private user: User;
    private order_id: number;
    private item_id: number;
    private user_id: number;
    private order: Order;
    private product: Product;
    private newOrder: NewOrder = {id: this.order_id, user: this.user, status: '', cost: '', user_id: this.user_id, modified_on: new Date(), created_on: new Date(), modified_by: this.user_id, created_by: this.user_id};
    private payment: Payment = {id: this.order_id, user: this.user, mpesa_code: '', user_id: this.user_id, modified_on: new Date(), created_on: new Date(), modified_by: this.user_id, created_by: this.user_id};
    private cartItems: any[];
    constructor(
        private _userService: UserService,
        private _cart: CartService,
        private _payment: PaymentService,
        private _orderService: OrderService,
        private _orderItemService: OrderItemService
    ) {
    }

    ngOnInit() {
      this.getUser();
    }

    getUser() {
        this._userService.get('current_user').subscribe((res) => {
            this.userMpesaPhone = res.mpesa_phone_number;
            this.userShippingAddress = res.default_shipping_address;
            this.loading = false;
            this.user = res;
            this.user_id = res.id;
       });
    }
}
