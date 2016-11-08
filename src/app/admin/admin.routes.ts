import { AdminDashboardComponent } from './components/admin-dashboard.component';
import { AdminAddProductComponent } from './components/admin-add-product.component';
import { AdminListProductComponent} from './components/admin-list-product.component';
import { AdminListOrdersComponent} from './components/admin-list-orders.component';
import { AdminAddCategoryComponent} from './components/admin_add_category.component';
import { AdminListPaymentsComponent} from './components/admin-list-payments.component';
import { AdminListUsersComponent} from './components/admin-list-users.component';

export const AdminRoutes = [
    { path: 'admin/dashboard',  component: AdminDashboardComponent } ,
    { path: 'admin/addproduct',  component: AdminAddProductComponent },
    { path: 'admin/listproduct',  component: AdminListProductComponent },
    { path: 'admin/addcategory',  component: AdminAddCategoryComponent },
    { path: 'admin/listorders',  component: AdminListOrdersComponent } ,
    { path: 'admin/listpayments',  component: AdminListPaymentsComponent } ,
    { path: 'admin/listusers',  component: AdminListUsersComponent } ,
];

