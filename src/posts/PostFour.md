---
title: "Sourcing Content From the File System" 
date: "21-04-2019"
----

![empty house for sale](For_Sale.jpg)


the first change is to add the gatsby-source-filesystem package. 

    npm install gatsby-source-filesystem

Then, in gatsby-config.js: 

    plugins: {
        ...
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        }
    }

gatsby-config.js is a node file, hence the 

    module.exports = {}

When we go back to our graphiQL playground, we have a lot more data than we have before.  

allFile -> edges -> node -> ....

Our query becomes: 

    query {
        allFile {
            edges {
                node {
                    name
                    extension
                    dir
                }
            }
        }
    }

The query above will return all the files in the project folder. their name, extension and directory location (dir)

Our Markdown posts can now be accessed via gatsby. 



