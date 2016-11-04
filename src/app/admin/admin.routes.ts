import { AdminDashboardComponent } from './components/admin-dashboard.component';
import { AdminAddProductComponent } from './components/admin-add-product.component';
import {AdminAddCategoryComponent} from './components/admin_add_category.component';


export const AdminRoutes = [
    { path: 'admin/dashboard',  component: AdminDashboardComponent } ,
    { path: 'admin/addproduct',  component: AdminAddProductComponent },
    { path: 'admin/addcategory',  component: AdminAddCategoryComponent }

];

