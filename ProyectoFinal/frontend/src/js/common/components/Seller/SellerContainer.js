import {connect} from "react-redux";
import {actions} from '../../../redux/modules/seller/seller';
import newProduct from './NewProduct';
import sellerProducts from './SellerProducts';
import soldProducts from './SoldProducts';
import sale from './Sale';
const ms2p = (state) => {
    return {
        ...state.seller,
    };
};
const md2p = {...actions};

//= =================
// Conection List on sale Products
//= =================
const SellerProducts = connect(ms2p, md2p)(sellerProducts);
//= =================
// Conection List sold Products
//= =================
const SoldProducts = connect(ms2p, md2p)(soldProducts);

//= =========================
// Conection Create Producr
//= ========================?
const FormProduct = connect(ms2p, md2p)(newProduct);
//= =========================
// Conection Sale
//= ========================?
const Sale = connect(ms2p, md2p)(sale);

export const ConnectionSeller = {
    FormProduct,
    SellerProducts,
    SoldProducts,
    Sale,
};
