import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

function SimplePostContainer({ post }) {
    return (
        <li className="post-link">
            <Link to=
                {post.node.slug}>

                <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
            </Link>

            <p>{post.node.date}</p>

        </li>
    )
}

export default SimplePostContainer;