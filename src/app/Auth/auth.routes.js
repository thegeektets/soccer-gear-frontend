"use strict";
var auth_component_1 = require('./components/auth.component');
var password_reset_component_1 = require('./components/password_reset.component');
var password_reset_done_component_1 = require('./components/password_reset_done.component');
exports.AuthRoutes = [
    { path: 'auth/login', component: auth_component_1.AuthComponent },
    { path: 'password/reset', component: password_reset_component_1.PasswordResetComponent },
    { path: 'password/reset/done', component: password_reset_done_component_1.PasswordResetDoneComponent },
];
//# sourceMappingURL=auth.routes.js.map