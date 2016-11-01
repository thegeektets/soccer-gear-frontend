import { Routes, RouterModule } from '@angular/router';

import {HomeRoutes} from './home/index';
import {AuthRoutes} from './Auth/auth.routes';
import {AccountRoutes} from './Account/account.routes';
import {ProductRoutes} from './product/product.routes';
import {CartRoutes} from './cart/cart.routes';
import {CheckoutRoutes} from './checkout/checkout.routes';
import {OrdersRoutes} from './orders/orders.routes';
import {AdminRoutes} from './admin/admin.routes';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...AuthRoutes,
    ...AccountRoutes,
    ...ProductRoutes,
    ...CartRoutes,
    ...CheckoutRoutes,
    ...OrdersRoutes,
    ...AdminRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
