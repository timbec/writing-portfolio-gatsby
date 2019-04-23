module.exports = {
    siteMetadata: {
        title: 'Full-Stack Bootcamp!!',
        author: 'Tim Beckett'
    },
    plugins: [
        {
            resolve: 'gatsby-source-wordpress',
            options: {
                baseUrl: "timbeckett-writing.com",
                protocol: "http",
                hostingWPCOM: false,
                useACF: true,
                acfOptionsPageIds: [],
                verboseOutput: true,
                perPage: 10,
                searchAndReplaceContentUrls: {
                    sourceUrl: "http://timbeckett-writing.com",
                    replacementUrl: "http://localhost:8000"
                },
                concurrentRequests: 10,
                includedRoutes: [
                    "**/categories",
                    "**/posts",
                    "**/pages",
                    "**/media",
                    "**/tags",
                    "**/taxonomies",
                    "**/users"
                ],
                normalizer: function ({ entities }) {
                    return entities
                },
            },
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ]
}