import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout>
            <section>
                <p>
                    Want to work with me?
            <Link to="/contact">
                        Contact Me
            </Link>
                </p>
                <h1>About Page</h1>

                <p>Info About Me</p>
            </section>
        </Layout>
    )
}

export default AboutPage; 