import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import {Login, Profile, Registro} from './common/components/LoginRegister';
import Demo from './common/components/Demo/Demo';
import ProtectedRoute from './ProtectedRoute';
import Examples from './common/components/Examples/Basic';
import NotFound from './common/components/layout/NotFound/NotFound';

import '../assets/fonts/fonts.css';

require('../../node_modules/font-awesome/css/font-awesome.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
import 'bootstrap/dist/css/bootstrap.min.css';
import Grids from "./common/components/Examples/Grids";
import Notificaciones from './common/components/Examples/Notificaciones';
import ExampleTabs from './common/components/Examples/Tabs/Tabs';
import {ConnectionSeller} from './common/components/Seller/SellerContainer';
import {ConnectionPurchase} from './common/components/Purchase/PurchaseContainer';
import {ConnectionProduct} from './common/components/Products/ProductContainer';
require('../style/index.css');

module.exports = (
    <div>
        <div className="container__content">
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/registro" component={Registro} />
                <ProtectedRoute exact path="/" component={Demo} />
                <ProtectedRoute exact path="/page2" component={Examples} />
                <ProtectedRoute exact path="/user-profile" component={Profile} />
                <ProtectedRoute exact path="/grids" component={Grids} />
                <ProtectedRoute exact path="/notifications" component={Notificaciones} />
                <ProtectedRoute exact path="/tabs" component={ExampleTabs} />
                {/* SELLER */}
                <ProtectedRoute exact path="/seller/products/create" component={ConnectionSeller.FormProduct} />
                <ProtectedRoute exact path="/seller/products/:id/" component={ConnectionSeller.FormProduct} />
                <ProtectedRoute exact path="/seller/products/:id/editar" component={ConnectionSeller.FormProduct} />
                <ProtectedRoute exact path="/seller/myproducts" component={ConnectionSeller.SellerProducts} />
                <ProtectedRoute exact path="/seller/mysoldproducts" component={ConnectionSeller.SoldProducts} />
                <ProtectedRoute exact path="/seller/mysoldproducts/:id" component={ConnectionSeller.Sale} />
                {/* PURCHASE */}
                <ProtectedRoute exact path="/purchase/mypurchase" component={ConnectionPurchase.AllPurchase} />
                <ProtectedRoute exact path="/purchase/mypurchase/:id/" component={ConnectionPurchase.Purchase} />
                {/* PRODUCT */}
                <ProtectedRoute exact path="/product/catalogue" component={ConnectionProduct.Catalogue} />
                <ProtectedRoute exact path="/product/catalogue/:id/" component={ConnectionProduct.Product} />
                <Route component={NotFound} />
            </Switch>
        </div>
        <NotificationContainer />
    </div>
);
