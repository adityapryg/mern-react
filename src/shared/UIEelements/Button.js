import React from "react";
import { Link } from "react-router-dom";


const Button = props => {
    //jika button bertipe pindah url
    if (props.href) {
        return (<a href={props.href}>
            {props.children}
        </a>)
    }

    //jika button untuk pindah komponen
    if (props.to) {
        return (
            <Link 
                to={props.to}
                exact={props.exact}
            >
                {props.children}
            </Link>
        )
    }

    //jika tidak memenuhi 2 diatas, button biasa
    return (
        <button 
            type={props.type}
            onClick={props.onClick} 
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}

export default Button;