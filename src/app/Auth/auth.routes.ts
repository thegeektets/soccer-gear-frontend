import {AuthComponent} from './components/auth.component';
import {PasswordRecoveryComponent} from './components/passwordRecovery.component';

export const AuthRoutes = [
    { path: 'auth/login',  component: AuthComponent },
    { path: 'password/recovery',  component: PasswordRecoveryComponent }
];
