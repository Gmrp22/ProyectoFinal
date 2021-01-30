import React , {Component} from 'react';
import PurchaseForm from './PurchaseForm'

export default class Purchase extends Component{
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
