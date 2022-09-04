import React from "react";

import './Input.css';

const Input = props => {
    const element = props.type === 'input' ? 
    <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
    /> : 
    <textarea
        id={props.id}
        type={props.type}
        row={props.rows || 3}
        value={props.value}
    />

    return (
        <div className="form-control">
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    )
}

export default Input;