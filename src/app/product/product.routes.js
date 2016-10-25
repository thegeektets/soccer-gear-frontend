"use strict";
var product_detail_component_1 = require('./components/product-detail.component');
var product_list_component_1 = require('./components/product-list.component');
exports.ProductRoutes = [
    { path: '', component: product_list_component_1.ProductListComponent },
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent }
];
//# sourceMappingURL=product.routes.js.map