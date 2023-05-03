import React from "react";

const Input = (props) => {
    const { type, error, name, onChange, label, placeHolder } = props
    const className = error ? "form-control is-invalid" : "form-control"
    return (
        <div className="form-floating mb-3">
            <input type={type} className={className} name={name} onChange={onChange}
                placeholder={placeHolder} />
            <div className="invalid-feedback">
                {error}
            </div>
            <label>{label}</label>
        </div>
    )
}

export default Input;