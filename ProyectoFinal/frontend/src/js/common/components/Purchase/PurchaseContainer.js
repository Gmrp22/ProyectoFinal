import { connect } from "react-redux";
import { actions } from "../../../redux/modules/purchase/purchase";
import purchase  from "./Purchase";
import allpurchase from './AllPurchase';
const ms2p = (state) => {
    return {
        ...state.purchase,
    };
};

const md2p = { ...actions };

//= =================
// Conection List Purchase
//= =================
const AllPurchase = connect(ms2p, md2p)(allpurchase);
//= =================
// Conection Purchase
//= =================
const Purchase = connect(ms2p, md2p)(purchase);

export const ConnectionPurchase = {
    Purchase,
    AllPurchase,
};
