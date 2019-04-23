---
title: "Working With Markdown Posts"
date: "21-04-2019"
---

##Working With Markdown Posts

We have our posts created in markdown, formatted like the above. We know need to another package: 

https://www.gatsbyjs.org/packages/gatsfby-transformer-remark/

`npm install --save  gatsby-transformer-remark`

Then we have to use our query from the GraphiQL Playground to import our data into the 'blog' page:

`
const BlogPage = () => {
       const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                    }
                }
            }
        }
    }
    `)

    ...


}
`

our list of posts can be found at: 

`
data.allMarkdown.edges
`
And we use the 'map' function to iterate over them: 

`
                <ol>
                    {
                        data.allMarkdownRemark.edges.map((post) => {
                            return (
                                <li>
                                    <h2>{post.node.frontmatter.title}</h2>
                                    <p>{post.node.frontmatter.date}</p>
                                </li>
                            )
                        })
                    }
                </ol>
`
This will produce a list of posts with title and date on the page. The next step is to add the slug so we can link the titles to an actual page. 

