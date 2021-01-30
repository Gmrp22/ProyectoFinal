import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { validate, validators } from "validate-redux-form";
import { renderField } from "../Utils/renderField/renderField";
const FormProduct = (props) => {
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
                {ver?<div></div>
                : 
                <button >Guardar</button>}
                <button type="button"><a href="#/seller/myproducts">
                    Cancelar
                    </a></button>
            </form>
        </div>
    );
};
export default reduxForm({
    form: "createProduct", // a unique identifier for this form
    validate: (data) => {
        return validate(data, {
            name: validators.exists()("Este campo es requerido"),
            price: validators.exists()("Este campo es requerido"),
            descrition : validators.exists()("Este campo es requerido"),
        });
    },
})(FormProduct);
