import React, { Component } from "react";
import { handleSubmit } from "../../../redux/modules/notificaciones/notificaciones";
import FormProduct from "./FormProduct";
export default class NewProduct extends Component {
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
                {/* <h4>
                   { (isActualizar)
                    ? (location.pathname.includes('ver')) ? 'Ver Producto' : 'Actualizar Producto'
                    : 'Nuevo producto'}
                    </h4> */}
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
