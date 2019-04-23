---
title: "Installing GraphiQL Playground"
date: "21-04-2019"
---


##Installing GraphiQL Playground: 

add file to be included with 'package.json': 

.env.development

GATSBY_GRAPHQL_IDE=playground

then get the env-cmd package with: 

npm install save-dev env-cmd

run server with: 

npm run develop

refresh localhost:8000/___graphql