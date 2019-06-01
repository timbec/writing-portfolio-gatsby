import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import PostContainer from '../posts/post-container.js';

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
      <ul>
        {
          data.allWordpressPost.edges.map((post) => {
            return (
              <PostContainer key={post.node.wordpress_id} post={post} />
            )
          })
        }
      </ul>
    </section>
  )
}

export default FeaturedArticles;