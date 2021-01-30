import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { validate, validators } from "validate-redux-form";
import { renderField , renderCurrency} from "../Utils/renderField/renderField";
const ReportForm = (props) => {
    const { handleSubmit, ver } = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Total de ventas</label>
                <Field
                    name="sales_total"
                    label="name"
                    type="text"
                    component={renderCurrency}
                  
                />
                <label>Precio promedio de catalogo</label>
                <Field
                    name="avg_price"
                    label="avg_price"
                    type="number"
                    component={renderCurrency}
                
                />
               
           
         
            </form>
        </div>
    );
};
export default reduxForm({
    form: "report", // a unique identifier for this form

})(ReportForm);
