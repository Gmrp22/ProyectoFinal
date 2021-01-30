import React, { Component } from "react";
import Grid from "../Utils/Grid";
import { standardActions } from "../Utils/Grid/StandardActions";

export default class SellerProducts extends Component {
    componentWillMount = () => {
        const { listar } = this.props;
        console.log(this.props.data);
        listar();
    };

    render() {
        const { data, loader, listar, page } = this.props;
        return (
            <div>
                <h1>Mis productos</h1>
                <button>
                    <a href="/#/seller/products/create">Nuevo Producto</a>
                </button>
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
                        })}
                    ></TableHeaderColumn>
                    <TableHeaderColumn isKey dataField="name" dataSort>
                        Nombre Producto
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="price" dataSort>
                        Precio Producto
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="description" dataSort>
                        Descripcion Producto
                    </TableHeaderColumn>
                </Grid>
            </div>
        );
    }
}
