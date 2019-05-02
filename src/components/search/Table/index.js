import React, { Component } from 'react';

function isSearched(searchTerm) {
    return function (item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
}

//ES6
// const isSearched = searchTerm => item =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase());

class Table extends Component {
    render() {
        const { list, pattern, onDismiss } = this.props;

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

                        <button onClick={() =>
                            onDismiss(item.objectID)} type="button">
                            Dismiss
                        </button>
                    </div>
                )}
            </div>
        )
    }
}

export default Table; 