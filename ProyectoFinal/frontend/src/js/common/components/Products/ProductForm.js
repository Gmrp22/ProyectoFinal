import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { renderField, renderCurrency } from "../Utils/renderField/renderField";
const ProductForm = (props) => {
    //Form de producto disponible para compra
    const { handleSubmit, ver } = props;
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-general">
              <div className="form-title"> <h4>Informacion Producto</h4></div>
                <div className="form-general-div">
                    <label className="form-label">Nombre Producto</label>
                    <Field
                        name="name"
                        label="name"
                        type="text"
                        component={renderField}
                        disabled={ver}
                    />
                </div>
                <div className="form-general-div">
                    <label className="form-label">Precio Producto</label>
                    <Field
                        name="price"
                        label="price"
                        type="number"
                        component={renderCurrency}
                        disabled={ver}
                    />
                </div>
                <div className="form-general-div">
                    <label className="form-label">Descripcion Producto</label>
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
                            <a href="#/product/catalogue">Cancelar</a>
                        </button>
                    </div>
                    <div className="form-general-save">
                        <button className="form-general-bsave ">Guardar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default reduxForm({
    form: "createPurchase", // a unique identifier for this form
})(ProductForm);
