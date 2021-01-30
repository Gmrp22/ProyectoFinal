import React, { Component } from "react";
import Grid from "../Utils/Grid";
import { standardActions } from "../Utils/Grid/StandardActions";
export default class AllPurchase extends Component{
    componentWillMount = () => {
        const { listar } = this.props;
        console.log(this.props.data);
        listar();
    };

    render(){
        const { data, loader, listar, page } = this.props;
        return(<div>
            <h1>Mis Compras</h1>
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
                            ver: "mypurchase",
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
        </div>)
    }
}