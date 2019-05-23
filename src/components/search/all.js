import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PostsSearch from './Search/PostSearch';

const client = new ApolloClient({
    // Change this to the URL of your WordPress site.
    uri: "http://writing-site.test/graphql"
});

const SearchPage = () => (
    <ApolloProvider client={client}>
        <div className="app">
            <h2 className="title">
                My first WPGraphQL & Apollo app {' '}
                <span className="emoji" role="img" aria-label="rocket">🚀</span>
            </h2>
            <PostsSearch />
        </div>
    </ApolloProvider>
);

export default SearchPage;
