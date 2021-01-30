import { connect } from "react-redux";
import { actions } from "../../../redux/modules/product/product";
import product  from "./Product";
import catalogue from './Catalogue';
const ms2p = (state) => {
    return {
        ...state.product,
    };
};

const md2p = { ...actions };

//= =================
// Conection Catalogue
//= =================
const Catalogue = connect(ms2p, md2p)(catalogue);
//= =================
// Conection Product
//= =================
const Product = connect(ms2p, md2p)(product);

export const ConnectionProduct = {
    Product,
    Catalogue,
};
