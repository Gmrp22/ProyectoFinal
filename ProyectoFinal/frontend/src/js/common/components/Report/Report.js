import React, { Component } from "react";
import { render } from "react-dom";
import ReportForm from "./ReportForm";
import Grid from "../Utils/Grid";
import { standardActions } from "../Utils/Grid/StandardActions";
export default class Report extends Component {
    componentWillMount = () => {
        const { listar } = this.props;
        console.log(this.props.data);
        listar();
    };
    render() {
        const { data, loader, listar, page } = this.props;
        return (
            <div>
                <h1> REPORTE VENTAS </h1>

                <ReportForm />

                <Grid
                    data={data}
                    loading={loader}
                    onPageChange={listar}
                    page={page}
                    striped
                    hover
                >
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
                    <TableHeaderColumn dataField="total_sales" dataSort>
                        Total de ventas
                    </TableHeaderColumn>
                </Grid>
            </div>
        );
    }
}
