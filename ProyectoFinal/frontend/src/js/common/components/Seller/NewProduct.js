import React, { Component } from "react";
import FormProduct from "./FormProduct";
export default class NewProduct extends Component {
    //Componente que contiene el formulario de nuevo producto
    componentWillMount = () => {
        const { match, detalle } = this.props;
        if (match.params.id) {
            const id = match.params.id;
            detalle(id);
        }
    };
    render() {
        const { onSubmit, match, location, actualizar } = this.props;
        const fn = (match.params.id) ? actualizar : onSubmit
        const isActualizar = (match.params.id) ? true : false
        return (
            <div>
                <FormProduct onSubmit={fn}
                isActualizar= {isActualizar}
                location ={location}
                ver={location.pathname.includes('ver') && true
                    
            }
                />
            </div>
        );
    }
}
