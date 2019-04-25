import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

const HomePage = () => {
    const data = useStaticQuery(graphql`
    query {
  allWordpressPost (
    filter:{
      sticky:{
        eq:true
      }
    })
  {
    edges {
      node {
        featured_media {
          source_url
        }
        wordpress_id
        date (formatString:"MMMM Do, YYYY")
        title
        slug
        categories {
          name
        }
        sticky
      }
    }
  }
}
`)
    return (
        <main>
            <Layout>
                <ul>
                    {
                        data.allWordpressPost.edges.map((post) => {
                            return (
                                <li className="post-link">


                                    <Link to=
                                        {post.node.slug}>
                                        <figure>
                                            <img src={post.node.featured_media.source_url} alt="" />
                                        </figure>
                                        <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                                    </Link>

                                    <p>{post.node.date}</p>

                                </li>

                            )
                        })
                    }
                </ul>
            </Layout>
        </main>

    )
}

export default HomePage;

