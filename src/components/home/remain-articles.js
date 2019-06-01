import React, { Components } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import SimplePostContainer from '../posts/simple-post-container.js';

//might need to change to component
const RemainingArticles = () => {
  const data = useStaticQuery(graphql`
    query {
  allWordpressPost (
    limit: 10,
    filter:{
      sticky:{
        eq:false
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
    <ul>
      {
        data.allWordpressPost.edges.map((post) => {
          return (
            <SimplePostContainer key={post.node.wordpress_id} post={post} />

          )
        })
      }
    </ul>
  )
}


export default RemainingArticles; 