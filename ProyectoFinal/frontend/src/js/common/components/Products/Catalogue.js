import React, { Component } from "react";
import Grid from "../Utils/Grid";
import { standardActions } from "../Utils/Grid/StandardActions";

export default class Catalogue extends Component {
    componentWillMount = () => {
        const { listar } = this.props;
        console.log(this.props.data);
        listar();
    };
    render() {
        const { data, loader, listar, page } = this.props;
        return (
            <div>
                <h4>Catalogo de Productos </h4>
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
