import React, { Component } from 'react';

//function Search({ value, onChange, children })
function Button({ onClick, className = '', children }) {

    return (
        <button
            onClick={onClick}
            className={className}
            type="button"
        >
            {children}
        </button>
    )
}

export default Button;