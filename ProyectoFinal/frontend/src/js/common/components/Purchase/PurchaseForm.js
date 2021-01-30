import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { validate, validators } from "validate-redux-form";
import { renderField, renderCurrency } from "../Utils/renderField/renderField";
const PurchaseForm = (props) => {
    const { handleSubmit, ver } = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombre Producto</label>
                <Field
                    name="product.name"
                    label="name"
                    type="text"
                    component={renderField}
                    disabled= {true}
                />
                <label>Precio Producto</label>
                <Field
                    name="product.price"
                    label="price"
                    type="number"
                    component={renderCurrency}
                    disabled= {true}
                />
         
      
                <button type="button"><a href="#/purchase/mypurchase">
                    volver
                    </a></button>
            </form>
        </div>
    );
};
export default reduxForm({
    form: "purchaseproduct", // a unique identifier for this form
})(PurchaseForm);
