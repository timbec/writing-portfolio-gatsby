import React, { Component } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const DEFAULT_QUERY = 'fiction';

class AllPosts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result: null,
            searchTerm: DEFAULT_QUERY
        };

        this.setSearchTopStories = this.setSearchTopStories.bind(this);

        this.onSearchChange = this.onSearchChange.bind(this);
    }

    setSearchTopStories(result) {
        this.setState({ result });
    }

    componentDidMount() {
        const { searchTerm } = this.state;


        const data = useStaticQuery(graphql`
        query {
            allWordpressPost {
                    edges {
                        node {
                            featured_media {
                            source_url
                            }
                            wordpress_id
                            date(formatString: "MMMM Do, YYYY")
                            title
                            slug
                            categories {
                                name
                            }
                        }
                    }
                }
            }
        `)

        console.log(data);
    }


}

export default AllPosts;