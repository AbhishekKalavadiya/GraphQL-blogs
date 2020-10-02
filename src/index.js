const express = require('express')
const { ApolloServer, PubSub } = require('apollo-server-express')
const http = require('http')
const typeDefs = require('./schema')
const db = require('./constant')
const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")
const Post = require("./resolvers/Post")
const Comment = require("./resolvers/Comment")
const User = require("./resolvers/User")
const Subscription = require("./resolvers/Subscription")

const PORT = 4000
const app = express()
const pubsub = new PubSub()

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: {
        Query, 
        Mutation, 
        Post,
        User,
        Comment,
        Subscription 
    },
    context: {
        db,
        pubsub
    }
})
apolloServer.applyMiddleware({app})

const httpServer = http.createServer(app)
apolloServer.installSubscriptionHandlers(httpServer)

httpServer.listen( PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`),
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`)}
)
