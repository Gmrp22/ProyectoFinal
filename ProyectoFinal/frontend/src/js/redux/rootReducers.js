import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import login from './modules/cuenta/login';
import register from './modules/cuenta/register';
import profile from './modules/cuenta/profile';
import usuarios from './modules/usuarios/usuarios';
import notificaciones from './modules/notificaciones/notificaciones';
import seller from  './modules/seller/seller';
import purchase from './modules/purchase/purchase';
import product from './modules/product/product';
import report from './modules/report/report'
export default combineReducers({
    form: formReducer,
    login,
    register,
    profile,
    usuarios,
    routing,
    notificaciones,
    seller,
    purchase,
    product,
    report,
});
