import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export const query = graphql`
    query($slug: String!) {
        wordpressPost(slug: { eq:$slug }) {
            title
            wordpress_id
            date(formatString: "MMMM Do, YYYY")
            content 
            categories {
                name
            }
            tags {
                name
            }
        }   
    }
`
const BlogPost = (props) => {

    return (
        <Layout>
            <h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPost.title }} />

            <div className="entry-content">
                <div dangerouslySetInnerHTML={{ __html: props.data.wordpressPost.content }} />
            </div>
        </Layout>
    )
}

export default BlogPost; 