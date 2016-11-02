import {AuthComponent} from './components/auth.component';
import {PasswordResetComponent} from './components/password_reset.component';
import {PasswordResetDoneComponent} from './components/password_reset_done.component';


export const AuthRoutes = [
    { path: 'auth/login',  component: AuthComponent },
    { path: 'password/reset',  component: PasswordResetComponent },
    { path: 'password/reset/done',  component: PasswordResetDoneComponent },

];
