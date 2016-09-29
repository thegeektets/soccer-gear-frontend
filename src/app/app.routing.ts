import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import { AuthRoutes } from './Auth/auth.routes';
import { AccountRoutes } from './Account/account.routes';
import {ProductRoutes} from './product/product.routes';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...AuthRoutes,
    ...AccountRoutes,
    ...ProductRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
