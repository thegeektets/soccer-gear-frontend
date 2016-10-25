"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./home/index');
var auth_routes_1 = require('./Auth/auth.routes');
var account_routes_1 = require('./Account/account.routes');
var product_routes_1 = require('./product/product.routes');
var cart_routes_1 = require('./cart/cart.routes');
var checkout_routes_1 = require('./checkout/checkout.routes');
var appRoutes = index_1.HomeRoutes.concat(auth_routes_1.AuthRoutes, account_routes_1.AccountRoutes, product_routes_1.ProductRoutes, cart_routes_1.CartRoutes, checkout_routes_1.CheckoutRoutes);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map