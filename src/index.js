const express = require('express')
const { ApolloServer  } = require('apollo-server-express')
const typeDefs = require('./schema')
const db = require('./constant')
const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")
const Post = require("./resolvers/Post")
const Comment = require("./resolvers/Comment")
const User = require("./resolvers/User")


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query, 
        Mutation, 
        Post,
        User,
        Comment 
    },
    context: {
        db: db
    }
})

const app = express()
server.applyMiddleware({app})

app.listen(4000, ()=>{
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
})
