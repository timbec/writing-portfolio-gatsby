import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

function PostContainer({ post }) {
    console.log(post);
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
}

export default PostContainer;