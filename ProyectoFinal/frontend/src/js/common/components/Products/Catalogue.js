import React, { Component } from "react";
import Grid from "../Utils/Grid";
import { standardActions } from "../Utils/Grid/StandardActions";

export default class Catalogue extends Component {
    //Componente que contiene la tabla de productos del catalogo
    componentWillMount = () => {
        const { listar } = this.props;
        listar();
    };
    render() {
        const { data, loader, listar, page } = this.props;
        return (
            <div>
                <div className="form-head">
                    <h1>Catalogo de Productos </h1>
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
                            ver: "catalogue",
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
            </div>
        );
    }
}
