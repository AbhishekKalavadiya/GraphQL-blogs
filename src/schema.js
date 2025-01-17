const { gql  } = require('apollo-server-express')

const typeDefs = gql(`

    type Query {
        users: [User!]!
        posts: [Post!]!
        comments: [Comment!]!
    }

    type Mutation {
        createUser(data: CreateUserInput): User!
        deleteUser(id: ID!): User!
        updateUser(id: ID!, data: UpdateUserInput!): User!
        createPost(data: CreatePostInput): Post!
        deletePost(id: ID!): Post!
        updatePost(id: ID!, data: UpdatePostInput!): Post!
        createComment(data: CreateCommentInput): Comment!
        deleteComment(id: ID!): Comment!
        updateComment(id: ID!, data: UpdateCommentInput! ): Comment!
    }

    type Subscription {
        post: Post!
    }

    input CreateUserInput{
        name: String!
        email: String!
        age: Int
    }

    input UpdateUserInput{
        name: String
        email: String
        age: Int
    }

    input CreatePostInput {
        title: String!
        body: String!
        published: Boolean!
        author: ID!
    }

    input UpdatePostInput{
        title: String
        body: String
        published: Boolean
    }

    input UpdateCommentInput{
        text: String
    }

    input CreateCommentInput {
        text: String!
        postId: ID!
        authorId: ID!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]! 
        comments: [Comment!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
        comments: [Comment!]!
    }

    type Comment {
        id: ID!
        text: String!
        postId: Post!
        authorId: User!
    }
`)

module.exports= typeDefs