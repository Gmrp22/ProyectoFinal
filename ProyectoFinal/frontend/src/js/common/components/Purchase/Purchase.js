import React , {Component} from 'react';
import PurchaseForm from './PurchaseForm'

export default class Purchase extends Component{
    //Componente que contiene el componente del form de compras
    componentWillMount = () => {
        const { match, detalle } = this.props;
        if (match.params.id) {
            const id = match.params.id;
            detalle(id);
        }
    };
    render(){
        return(<div>
            
            <PurchaseForm />
        </div>)
    }
}
