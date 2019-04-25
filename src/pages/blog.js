import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';


import Layout from '../components/layout';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allWordpressPost ( sort: { fields: date, order: DESC }) {
        edges {
            node {
                date (formatString:"MMMM Do, YYYY")
                title
                slug
                categories {
                    name
                }
                tags {
                    name
                }
            }
        }
    }
    }
`)
    return (
        <Layout>
            <section>
                <h1>Full List</h1>
                <ul>
                    {
                        data.allWordpressPost.edges.map((post) => {
                            return (
                                <li className="post-link">


                                    <Link to={post.node.slug}>
                                        <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                                    </Link>

                                    <p>{post.node.date}</p>

                                </li>

                            )
                        })
                    }

                </ul>
            </section>
        </Layout>
    )
}

export default BlogPage; 