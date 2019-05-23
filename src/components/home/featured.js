import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const FeaturedArticles = () => {
  const data = useStaticQuery(graphql`
    query {
  allWordpressPost (
    limit: 3
    filter:{
      sticky:{
        eq:true
      }
    })
  {
    edges {
      node {
        featured_media {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
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
    <section className="section-featured">
      <h1>Featured Articles</h1>
      <h3>Top Three Images</h3>
      <ul>
        {
          data.allWordpressPost.edges.map((post) => {
            return (
              <li className="post-link">
                <Link to=
                  {post.node.slug}>
                  <figure>
                    <img src={post.node.featured_media.source_url} />
                  </figure>
                  <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                </Link>

                <p>{post.node.date}</p>

              </li>

            )
          })
        }
      </ul>
    </section>
  )
}

export default FeaturedArticles;