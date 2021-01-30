import React , {Component} from 'react';


export default class Catalogue extends Component{
    componentWillMount = () => {
        const { listar } = this.props;
        console.log(this.props.data);
        listar();
    };
    render(){
        return(<div>
            <h4>Catalogo de Compras</h4>
        </div>)
    }
}
