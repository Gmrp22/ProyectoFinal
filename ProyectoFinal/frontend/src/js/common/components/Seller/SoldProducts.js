import React, { Component } from "react";
import Grid from "../Utils/Grid";
import { standardActions } from "../Utils/Grid/StandardActions";

export default class SoldProducts extends Component {
    componentWillMount = () => {
        const { listarsold } = this.props;
        listarsold();
    };

    render() {
        const { data, loader, listarsold, page } = this.props;
        return (
            <div>
                <div className="form-head">
                    <h1>Productos Vendidos </h1>
                </div>
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
                            ver: "mysoldproducts",
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
                                return `Q${cell.price}`;
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
