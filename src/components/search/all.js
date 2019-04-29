import React, { Component } from 'react';
import Link from 'gatsby';

const DEFAULT_QUERY = 'fiction';
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
        this.setState({ saerchTerm: event.target.value })
    }

    render() {
        return (
            <div className="all-posts">
                <form>
                    <input type="text" />
                </form>
                {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
                    <div key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>

                        <button onClick={() =>
                            this.onDismiss(item.objectID)} type="button">
                            Dismiss
                        </button>
                    </div>
                )}
            </div>
        )
    }
}

export default AllPosts; 