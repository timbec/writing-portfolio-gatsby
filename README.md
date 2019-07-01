A gatsby.js front end for my wordpress site at timbeckett-writing.com. Gatsby is attractive because of the integrated use of GraphQL. The basics of this site were built following Andrew Mead's excellent tutorial at: 

https://www.youtube.com/watch?v=8t0vNu2fCCM&t=10584s

The reason for using a JS front end on top of Wordpress is I have well over a couple hundred posts on this site, organized by category (and to some extent by tag); thus moving to a separate stack would have been difficult. 

This is very much a work in process. CSS Grid will be used to organize styles on the front end. 

My model for the basic design is the online travel magazine Roads and Kingdoms: https://roadsandkingdoms.com/

TODO: 

1) Archive the old search feature. I don't like how it brings in data. 
2) Use Brad Traversy's course for a more robust structure. I like his code better as well. 
3) Everything will happen in the search folder, pulled in by `search.js` in the pages folder. 
4) Should be able to figure it out following through my own code. However, can follow basic structure of lesson (using hooks from the beginning to avoid using `this.state.whatever` and `this.props.whatever-else`) and keeping the code as clean as possible. Follow this branch (pre-context): https://github.com/timbec/github-profile-reader/tree/pre-context/src
    - since we're using Gatsby, the first thing to figure out is how to bring in search queries. Can I do this using gatsby or should I just use Axios as per the tutorial? A little unclear how you'd return search queries using gatsby.js. However, not sure how this sould integrate with graphql on the gatsby end. 
    This has some useful info: https://www.gatsbyjs.org/docs/client-data-fetching/

    I can follow the basic structure of original search query files, using axios instead of Apollo (which seemed to cause some issues with fetching data I hadn't had otherwise). This is basic graphql structure for the 'SearchList' page. so long as the data comes back in the proper form, there shouldn't be a problem. if there is, I can try Apollo again: 
            // This is the query that Apollo Client will send to the WP site.
        const POSTS_SEARCH_QUERY = gql`
        query POSTS_SEARCH_QUERY($searchQuery: String!) {
            posts(where: { search: $searchQuery }) {
            edges {
                node {
                postId
                title
                slug
                date
                featuredImage {
                    sourceUrl
                    altText
                }
                }
            }
            }
        }
        `;
5) put package-lock.json into .gitignore

6) Update the html to follow BEM standards (can just do this in the components)
7) Style with SASS, using conventions from 'Advanced CSS' course on github. 