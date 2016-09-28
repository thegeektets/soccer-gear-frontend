import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import { AuthRoutes } from './Auth/auth.routes';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...AuthRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
