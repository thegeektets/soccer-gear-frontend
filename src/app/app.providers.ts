import { AuthService } from './Auth/services/auth.service';
import { AuthToken } from './services/AuthToken';

export const APP_PROVIDERS = [
    AuthService,
    AuthToken
];
