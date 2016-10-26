import {OrdersComponent} from './components/orders.component';
import {OrderItemsComponent} from './components/order-items.component';

export const OrdersRoutes = [
    { path: 'account/orders',  component: OrdersComponent } ,
    { path: 'order_item/:id',  component: OrderItemsComponent }
];
