import React from "react";
import {Field, reduxForm} from "redux-form";


class StreamForm extends React.Component {

    renderError = ({error, touched}) => {
        if (touched && error) {
            return (
                <span>{error}</span>
            )
        }
    }

    renderInput = ({label, input, meta}) => {
        console.log(meta)
        return (
            <div className="form-group">
                <label>{label}</label>
                <input {...input} autoComplete="off" className="form-control"/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render () {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}> 
                <Field  name="title" component={this.renderInput} label="Enter Title"/>
                <Field  name="description" component={this.renderInput} label="Enter Description"/>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {}

    if (!formValues.title){
        errors.title = "You must enter a title";
    }

    if (!formValues.description){
        errors.description = "You must enter a description";
    }

    return errors;
}

export default reduxForm({ form: "streamForm", validate: validate })(StreamForm); 
