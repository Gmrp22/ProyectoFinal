import React, { Component } from "react";
import { render } from "react-dom";
import ReportForm from "./ReportForm";
import Grid from "../Utils/Grid";
export default class Report extends Component {
    //Componente con form de datos de venta de usuario 
    //Compoente con tabla de datos de venta de cada producto del usuario
    componentWillMount = () => {
        const { listar } = this.props;
        listar();
    };
    render() {
        const { data, loader, listar, page } = this.props;
        return (
            <div>
                <div className="form-head ">
                    <h1>Reporte Ventas </h1>
                </div>

                <ReportForm />
                <br></br>
                <br></br>
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
                        Precio Actual Producto
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="state" dataSort>
                        Estado
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="total_sales" dataSort>
                        Cantidad de ventas
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="total_SaleMo"
                        dataSort
                        dataFormat={(cell) => {
                            if (cell) {
                                return `Q${cell}`;
                            }
                        }}
                    >
                        Total de ventas
                    </TableHeaderColumn>
                </Grid>
            </div>
        );
    }
}
