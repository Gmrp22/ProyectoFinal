import {connect} from "react-redux";
import {actions} from '../../../redux/modules/report/report';
import report from './Report';


const ms2p = (state) => {
    return {
        ...state.report,
    };
};
const md2p = {...actions};


//= =================
// Conection Report
//= =================
const Report = connect(ms2p, md2p)(report);



export const ConnectionReport = {
    Report,
};
