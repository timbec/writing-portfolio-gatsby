import React, { Component } from 'react';

import Search from './Search/index';
import Table from './Table/index';

const DEFAULT_QUERY = '';
const PATH_BASE = 'http://writing-site.test/wp-json/wp/v2/posts';
const PATH_SEARCH = 'search=';
const PARAM_SEARCH = 'search=';
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



//ES6
// const isSearched = searchTerm => item =>
//     item.title.rendered.toLowerCase().includes(searchTerm.toLowerCase());

class AllPosts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result: null,
            searchTerm: DEFAULT_QUERY,
        }

        this.setSearchPosts = this.setSearchPosts.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);

        this.onDismiss = this.onDismiss.bind(this);
    }

    /**
     * 
     * @param {result} result 
     * Sets state to result object. 
     */
    setSearchPosts(result) {
        console.log(result);
        this.setState({ result });
    }

    componentDidMount() {
        const { searchTerm } = this.state;

        fetch(`${PATH_BASE}?${PATH_SEARCH}${searchTerm}`)
            .then(response => response.json())
            .then(result =>
                this.setSearchPosts(result))
            .catch(error => error);
    }

    /**
     * 
     * @param {event} event 
     * takes event and updates searchTerm state to    
     * match event.target.value
     */
    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value })
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

    render() {
        const { searchTerm, result } = this.state;

        if (!result) { return null; }
        return (
            <div className="all-posts">
                <Search
                    value={searchTerm}
                    onChange={this.onSearchChange}
                >Search: </Search>
                <Table
                    list={result}
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