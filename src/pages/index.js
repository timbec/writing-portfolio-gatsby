import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => {
    return (
        <main>
            <Layout>
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

