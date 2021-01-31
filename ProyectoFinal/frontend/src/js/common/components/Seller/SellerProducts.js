import React, { Component } from "react";
import Grid from "../Utils/Grid";
import { standardActions } from "../Utils/Grid/StandardActions";

export default class SellerProducts extends Component {
    //Componente con tabla de productos del usuario
    componentWillMount = () => {
        const { listar } = this.props;
        listar();
    };

    render() {
        const { data, loader, listar, page, eliminar } = this.props;
        return (
            <div>
                <div className="form-head">
                    <h1>Mis Productos </h1>
                </div>

                <Grid
                    data={data}
                    loading={loader}
                    onPageChange={listar}
                    page={page}
                    striped
                    hover
                >
                    <TableHeaderColumn
                        dataField="id"
                        dataAlign="center"
                        dataSort
                        dataFormat={standardActions({
                            editar: "products",
                            ver: "products",
                            eliminar
                        })}
                    ></TableHeaderColumn>
                    <TableHeaderColumn isKey dataField="name" dataSort>
                        Nombre Producto
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="price"
                        dataSort
                        dataFormat={(cell) => {
                            if (cell) {
                                return `Q${cell}`;
                            }
                        }}
                    >
                        Precio Producto
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="description" dataSort>
                        Descripcion Producto
                    </TableHeaderColumn>
                    
                </Grid>

                <button className="new_product">
                    <a href="/#/seller/products/create">Nuevo Producto</a>
                </button>
            </div>
        );
    }
}
