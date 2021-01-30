import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { validate, validators } from "validate-redux-form";
import { renderField, renderCurrency } from "../Utils/renderField/renderField";

const FormProduct = (props) => {
    const { handleSubmit, ver, isActualizar, location } = props;
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-general">
                <div className="form-title">
                    <h4>
                        {isActualizar
                            ? location.pathname.includes("editar")
                                ? "Actualizar Producto"
                                : "Ver Producto"
                            : "Nuevo producto"}
                    </h4>
                </div>
                <div className="form-general-div">
                    <label>Nombre Producto</label>
                    <Field
                        name="name"
                        label="name"
                        type="text"
                        component={renderField}
                        disabled={ver}
                    />
                </div>
                <div className="form-general-div">
                    <label>Precio Producto</label>
                    <Field
                        name="price"
                        label="price"
                        type="number"
                        component={renderCurrency}
                        disabled={ver}
                    />
                </div>
                <div className="form-general-div">
                    <label>Descripcion Producto</label>
                    <Field
                        name="description"
                        label="description"
                        type="text"
                        component={renderField}
                        disabled={ver}
                    />
                </div>
                <div className="form-general-buttons">
                    <div className="form-general-cancel">
                        <button type="button" className="form-general-bsave ">
                            <a href="#/seller/myproducts">Cancelar</a>
                        </button>
                    </div>

                    {ver ? (
                        <div></div>
                    ) : (
                        <div className="form-general-save">
                            <button className="form-general-bsave    ">
                                Guardar
                            </button>
                        </div>
                    )}
                </div>
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
            descrition: validators.exists()("Este campo es requerido"),
        });
    },
})(FormProduct);
