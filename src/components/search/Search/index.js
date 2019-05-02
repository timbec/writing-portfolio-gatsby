import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { value, onChange } = this.props;
        return (
            <form>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
                <button type="submit">
                    Search
                </button>
            </form>
        )
    }
}

export default Search; 