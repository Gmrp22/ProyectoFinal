import React , {Component} from 'react';
import SaleForm from './SaleForm'
export default class Sale extends Component{
    //Componente que contiene formulario de venta
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
