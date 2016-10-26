import {OrdersComponent} from './components/orders.component';
import {OrderItemsComponent} from './components/order-items.component';

export const OrdersRoutes = [
    { path: 'account/orders',  component: OrdersComponent } ,
    { path: 'account/order_items/:id',  component: OrderItemsComponent },
    { path: 'account/payment/:id',  component: OrderItemsComponent }
];
