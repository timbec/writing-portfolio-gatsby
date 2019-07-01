import React, { Component } from 'react';
import Link from 'gatsby';

import Button from '../Button/index';

function isSearched(searchTerm) {
    return function (item) {
        return item.title.rendered.toLowerCase().includes(searchTerm.toLowerCase());
    }
}

//ES6
// const isSearched = searchTerm => item =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase());

//needs to be exported to separate file, but returns an error for now.
function Table({ list, pattern, onDismiss }) {

    return (
        <div>
            {list.filter(isSearched(pattern)).map(item =>
                <div key={item.id}>
                    <h1>
                        <a href={item.slug}>
                            {item.title.rendered}
                        </a>
                    </h1>
                </div>
            )}
        </div>
    )
}

export default Table; 