import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import AllPosts from '../components/search/all';

const ListAllPosts = () => {
    return (
        <Layout>
            <section>
                <h1>All Posts</h1>
                <AllPosts></AllPosts>
            </section>
        </Layout>
    )
}

export default ListAllPosts; 