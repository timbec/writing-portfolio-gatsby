import React, { Components } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';


//might need to change to component
const RemainingArticles = () => {
    const data = useStaticQuery(graphql`
    query {
  allWordpressPost (
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
                        <li className="post-link">
                            <Link to=
                                {post.node.slug}>

                                <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                            </Link>

                            <p>{post.node.date}</p>

                        </li>

                    )
                })
            }
        </ul>
    )
}


export default RemainingArticles; 