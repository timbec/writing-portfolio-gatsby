import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PostsSearch from './Search/PostSearch';

/***if mysql server doesn't reboot after computer restart, might have to reset permissions: 
 * sudo chmod -R 777 /usr/local/var/mysql/
 * from: https://apple.stackexchange.com/questions/102112/the-server-quit-without-updating-pid-file-usr-local-var-mysql-name-pid
 *
 * thing is - do I want to keep this or rebuild with search function I built on
 * Traversy's course. Feel like his code is cleaner, could possibly incorporate
 * Context API. 
 * /
 * */
const client = new ApolloClient({
    // Change this to the URL of your WordPress site.
    uri: "http://timbeckett-writing.com/graphql"
});

const SearchPage = () => (
    <ApolloProvider client={client}>
        <div className="app">
            <h2 className="title">
                Search Page
            </h2>
            <PostsSearch />
        </div>
    </ApolloProvider>
);

export default SearchPage;
