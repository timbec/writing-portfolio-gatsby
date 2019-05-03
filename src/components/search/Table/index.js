import React, { Component } from 'react';
//import Link from 'gatsby';

import Button from '../Button/index';

function isSearched(searchTerm) {
    return function (item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
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
                <div key={item.objectID}>
                    <span>
                        <a href={item.url}>{item.title}</a>
                    </span>
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>

                    <Button
                        onClick={() => onDismiss(item.objectID)}
                    >Dismiss</Button>
                </div>
            )}
        </div>
    )
}

export default Table; 