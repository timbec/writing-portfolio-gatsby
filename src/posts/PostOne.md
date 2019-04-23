---
title: "How to use GraphiQL and import data into components"
date: "04-21-2019"
---
![Candu High](./Candu-High.jpg)
GraphiQL can show you what data you have access to. Open 'Docs' on right. You will see three possible options: 
    - queries, mutations, subscriptions. 

in this case, we use 'queries'. We break it down as follows: 
    - query
        - site
            - siteMetadata
               - title
               - author. 

The queries match what we set up in gatsby-config.js. The structure of our response is directed by the structure of our query. In this case: 

module.exports = {
    siteMetadata: {
        title: 'Full-Stack Bootcamp!!',
        author: 'Tim Beckett'
    }
}

in GraphiQL, we can test running: 
query {
    site {
        siteMetadata {
            title
            author
        }
    }
}

Once we test it in GraphiQL, we can add it to a component, mirroring the structure we used in GraphiQL: 

import {Link, graphql, useStaticQuery } from 'gatsby'; 

in the query: 
const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
                author
            }
        }
    }
    `)
}

include our new data with: 

{data.site.siteMetadata.title}

which will output whatever we have in gatsby-config.js