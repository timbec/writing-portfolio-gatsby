import React from 'react';

// Helper function for formatting dates.
const formatDate = date => new Date(date).toDateString();

const PostCard = ({ post }) => {
    const { postId, title, date, slug, featuredImage } = post;

    return (
        <div key={postId} className="post-card">
            {console.log('Image:'.featuredImage)}
            {featuredImage && // If a featured image exists, display it.
                <a href={slug}>
                    <img src={featuredImage.sourceUrl} alt={featuredImage.altText} className="post-card__image" />
                </a>
            }
            <h3 className="post-card__heading">
                <a href={slug}>
                    {title}
                </a>
            </h3>
            <span className="post-card__detail">
                <span className="post-card__label">Date:</span> {formatDate(date)}
            </span>

        </div>
    );
};

export default PostCard;