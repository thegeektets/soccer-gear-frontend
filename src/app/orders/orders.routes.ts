import {OrdersComponent} from './components/orders.component';
import {OrderItemsComponent} from './components/order-items.component';
import {OrderPaymentComponent} from './components/order-payment.component';

export const OrdersRoutes = [
    { path: 'account/orders',  component: OrdersComponent } ,
    { path: 'account/order_items/:id',  component: OrderItemsComponent },
    { path: 'account/order_payment/:id',  component: OrderPaymentComponent }
];
