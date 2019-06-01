import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import SearchPage from '../components/search/search';

const ListSearchPage = () => {
    return (
        <Layout>
            <section>
                <SearchPage></SearchPage>
            </section>
        </Layout>
    )
}

export default ListSearchPage; 