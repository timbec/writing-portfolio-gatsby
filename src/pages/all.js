import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import SearchPage from '../components/search/all';

const ListSearchPage = () => {
    return (
        <Layout>
            <section>
                <h1>All Posts</h1>
                <SearchPage></SearchPage>
            </section>
        </Layout>
    )
}

export default ListSearchPage; 