import React, { Component } from "react";
import ProductForm from "./ProductForm";

export default class Product extends Component {
    // Componente que contiene el form de producto

    componentWillMount = () => {
        const { match, detalle } = this.props;
        if (match.params.id) {
            const id = match.params.id;
            detalle(id);
        }
    };
    render() {
        const { onSubmit, location } = this.props;

        return (
            <div>
                <ProductForm
                    onSubmit={onSubmit}
                    ver={location.pathname.includes("ver") && true}
                />
            </div>
        );
    }
}
