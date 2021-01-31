import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { validate, validators } from "validate-redux-form";
import { renderField, renderCurrency } from "../Utils/renderField/renderField";
const PurchaseForm = (props) => {
    const { handleSubmit, ver } = props;
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-general">
            <div className="form-title"> <h4>Informacion Compra</h4></div>
            <div className="form-general-div">
                <label className="form-label" >Nombre Producto</label>
                <Field
                    name="product.name"
                    label="name"
                    type="text"
                    component={renderField}
                    disabled= {true}
                /></div>
                <div className="form-general-div">
                <label className="form-label">Precio Producto</label>
                <Field
                    name="product.price"
                    label="price"
                    type="number"
                    component={renderCurrency}
                    disabled= {true}
                />
         </div>
         <div className="form-general-buttons">
                <div className="form-general-cancel">
                <button type="button"  className="form-general-bsave "><a href="#/purchase/mypurchase">
                    volver
                    </a></button></div> </div>
            </form>
        </div>
    );
};
export default reduxForm({
    form: "purchaseproduct", // a unique identifier for this form
})(PurchaseForm);
