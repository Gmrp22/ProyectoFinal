import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { validate, validators } from "validate-redux-form";
import { renderField } from "../Utils/renderField/renderField";
const ProductForm = (props) => {
    const { handleSubmit, ver } = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombre Producto</label>
                <Field
                    name="name"
                    label="name"
                    type="text"
                    component={renderField}
                    disabled= {ver}
                />
                <label>Precio Producto</label>
                <Field
                    name="price"
                    label="price"
                    type="number"
                    component={renderField}
                    disabled= {ver}
                />
                <label>Descripcion Producto</label>
                <Field
                    name="description"
                    label="description"
                    type="text"
                    component={renderField}
                    disabled= {ver}
                />
               
                <button >Guardar</button>
                <button type="button"><a href="#/product/catalogue">
                    Cancelar
                    </a></button>
            </form>
        </div>
    );
};
export default reduxForm({
    form: "createPurchase", // a unique identifier for this form
    
})(ProductForm);
