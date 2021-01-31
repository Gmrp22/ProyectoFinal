import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { renderField, renderCurrency } from "../Utils/renderField/renderField";
const SaleForm = (props) => {
    //Formulario con informacion de venta
    const { handleSubmit, ver } = props;
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-general">
            <div className="form-title"> <h4>Informacion Venta</h4></div>
                <div className="form-general-div">
                    <label className="form-label"> Nombre Producto</label>
                    <Field
                        name="product.name"
                        label="name"
                        type="text"
                        component={renderField}
                        disabled={true}
                    />
                </div>
                <div className="form-general-div">
                    <label className="form-label">Precio De Venta Producto</label>
                    <Field
                        name="price_buy"
                        label="price"
                        type="number"
                        component={renderCurrency}
                        disabled={true}
                    />
                </div>
                <div className="form-general-buttons">
                <div className="form-general-cancel">
                <button type="button" className="form-general-bsave ">
                    <a href="#/seller/mysoldproducts">Volver</a>
                </button></div></div>
            </form>
        </div>
    );
};
export default reduxForm({
    form: "saleproduct", // a unique identifier for this form
})(SaleForm);
