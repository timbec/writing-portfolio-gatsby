import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
    return (
        <main>
            <Layout>
                <Head title="Home Page" />
                <h1>Hello, </h1>
                <h2>Tim Beckett</h2>
                <h3>Developer</h3>

                <p>Need a developer? Contact me @
                <Link to="/contact">My Contact Page</Link>
                </p>
            </Layout>
        </main>

    )
}

export default IndexPage;

