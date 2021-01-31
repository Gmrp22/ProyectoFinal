import React , {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import SaleForm from './SaleForm'
export default class Sale extends Component{
    componentWillMount = () => {
        const { match, detalleSale } = this.props;
        if (match.params.id) {
            const id = match.params.id;
            detalleSale(id);
        }
    };
    render(){
        return(<div>
           
            <SaleForm />
        </div>)
    }
}
