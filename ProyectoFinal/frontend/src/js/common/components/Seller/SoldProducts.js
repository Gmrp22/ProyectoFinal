import React, { Component } from "react";
import Grid from "../Utils/Grid";
import { standardActions } from "../Utils/Grid/StandardActions";

export default class SoldProducts extends Component {
    componentWillMount = () => {
        const { listarsold } = this.props;
        console.log(this.props.data);
        listarsold();
    };

    render() {
        const { data, loader, listarsold, page } = this.props;
        return (
            <div>
                <h1>Ventas de mis productos</h1>
                <Grid
                    data={data}
                    loading={loader}
                    onPageChange={listarsold}
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
                    <TableHeaderColumn
                        isKey
                        dataField="product"
                        dataSort
                        dataFormat={(cell) => {
                            if (cell) {
                                return cell.name;
                            }
                        }}
                    >
                        Nombre Producto
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="product"
                        dataSort
                        dataFormat={(cell) => {
                            if (cell) {
                                return cell.price;
                            }
                        }}
                    >
                        Precio Producto
                    </TableHeaderColumn>
                </Grid>
            </div>
        );
    }
}
