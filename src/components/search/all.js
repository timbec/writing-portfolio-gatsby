import React, { Component } from 'react';

import Search from './Search/index';
import Table from './Table/index';

const DEFAULT_QUERY = 'fiction';
const PATH_BASE = 'https://timbbeckett-writing.com/wp/v2/posts';
const PATH_SEARCH = '?search';
const PARAM_SEARCH = '?search=';
const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Gatsby',
        url: 'https://reactjs.org/',
        author: 'someone',
        num_comments: 5,
        points: 4,
        objectID: 1,
    }

]

function isSearched(searchTerm) {
    return function (item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
}

//ES6
// const isSearched = searchTerm => item =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase());

class AllPosts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list,
            searchTerm: '',
        }

        this.onDismiss = this.onDismiss.bind(this);

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    /**
     * 
     * @param {id} id 
     * checks if 'id' matches 'item.objectID'. If so, 
     * removes 'item.objectID' from list. 
     * returns updated list
     */
    onDismiss(id) {
        const isNotId = item => item.objectID !== id;
        const updatedList = this.state.list.filter(isNotId);
        this.setState({ list: updatedList });
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        const { searchTerm, list } = this.state;
        return (
            <div className="all-posts">
                <Search
                    value={searchTerm}
                    onChange={this.onSearchChange}
                >Search: </Search>
                <Table
                    list={list}
                    pattern={searchTerm}
                    onDismiss={this.onDismiss}
                />
            </div>
        )
    }
}

export default AllPosts;

// //needs to be exported to separate file, but returns an error for now.
// class Table extends Component {
//     render() {
//         const { list, pattern, onDismiss } = this.props;

//         return (
//             <div>
//                 {list.filter(isSearched(pattern)).map(item =>
//                     <div key={item.objectID}>
//                         <span>
//                             <a href={item.url}>{item.title}</a>
//                         </span>
//                         <span>{item.author}</span>
//                         <span>{item.num_comments}</span>
//                         <span>{item.points}</span>

//                         <button onClick={() =>
//                             onDismiss(item.objectID)} type="button">
//                             Dismiss
//                         </button>
//                     </div>
//                 )}
//             </div>
//         )
//     }
// }