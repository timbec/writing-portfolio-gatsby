import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const NonFictionPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allWordpressPost ( filter: { categories: {elemMatch: {
                name: { eq: "non-fiction" }
            }}}) {
            edges {
                node {
                    featured_media {
                        source_url
                    }
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
                <h1>Non Fiction Page</h1>
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

export default NonFictionPage; 