import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const NotFound = () => {
    return (
        <Layout>
            <Head title="404 Page" />
            <h1>Page Not Found</h1>
            <Link to="/">Back To Home</Link>
        </Layout>
    )
}

export default NotFound; 