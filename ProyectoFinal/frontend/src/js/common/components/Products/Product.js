import React , {Component} from 'react';
import ProductForm from "./ProductForm";

export default class Product extends Component{
    componentWillMount = () => {
        const { match, detalle } = this.props;
        if (match.params.id) {
            const id = match.params.id;
            detalle(id);
        }
    };
    render(){
        const { onSubmit, match, location, actualizar } = this.props;
       
      
        return(<div>
            <h4>Product</h4>
            <ProductForm onSubmit={onSubmit}
                ver={location.pathname.includes('ver') && true}
                />
        </div>)
    }
}
