const { v4: uuidv4 } = require('uuid')

const Mutation = {
    createUser: (parent, args, {db}, info) => {

        const emailTaken = db.users.some((user)=> user.email === args.data.email)

        if (emailTaken){
            throw new Error("Email already exists")
        }

        const user = {
            id: uuidv4(),
            name: args.data.name,
            email: args.data.email,
            age: args.data.age
        }

        db.users.push(user)
        return user
    },
    deleteUser: (parents, args, {db}, info) => {
        const userIndex = db.users.findIndex((user) => user.id === args.id)

        if(userIndex === -1){
            throw new Error('User not Found')
        }

        const deletedUsers = db.users.splice(userIndex, 1)

        db.posts = db.posts.filter((post) => {
            const match = post.authorId === args.id

            if(match){
                db.comments = db.comments.filter((comment) => comment.postId !== post.id)
            }

            return !match
        })
        db.comments = db.comments.filter((comment) => comment.authorId !== args.id)

        return deletedUsers[0]

    },
    updateUser: (parent, args, { db }, info) => {
        const user = db.users.find((user) => user.id === args.id)
        if(!user) {
            throw new Error("User not found")
        }

        if(typeof args.data.email === 'string'){
            const emailTaken = db.users.some((user) => user.email === args.data.email)
            console.log(emailTaken)
            if(emailTaken){
                throw new Error("Email already exists")
            }
            user.email = args.data.email
        }

        if(typeof args.data.name === 'string'){
            user.name = args.data.name
        }
        
        if(typeof args.data.age !== 'undefined'){
            user.age = args.data.age
        }
        return user
    },
    deletePost: (parents, args, {db}, info) => {
      
        const postIndex = db.posts.findIndex((post)=> post.id === args.id)
        
        if(postIndex === -1){
            throw new Error("post not found")
        }
 
        const deletedPosts = db.posts.splice(postIndex, 1)
   
        db.comments = db.comments.filter((comment) => {
            let matchpost = comment.postId === args.id

            return !matchpost
        })

        return deletedPosts[0]

    },
    createPost: (parent, args, {db}, info) => { 
        const userExists = db.users.some((user) => user.id === args.data.author)

        if(!userExists) {
            throw new Error("Not a valid user")
        }

        const post = {
            id: uuidv4(),
            title: args.data.title,
            body: args.data.body,
            published: args.data.published,
            author: args.data.author
        }

        db.posts.push(post)

        return post
    },
    updatePost: (parent, { data, id }, { db }, info) => {
        const post = db.posts.find((post)=> post.id === id)
        if(!post){ throw new Error("post not exists")}

        if(typeof data.title === "string") {
            post.title = data.title
        }
        
        if(typeof data.body === "string") {
            post.body = data.body
        }
        
        if(typeof data.published === "boolean") {
            post.published = data.published
        }

        return post
    },
    deleteComment: (parents, args, {db}, info) => {
        const commentIndex = db.comments.findIndex((comment) => comment.id == args.id )

        if(commentIndex === -1 ){
            throw new Error('comment not found')
        }
        const deletedcomment = db.comments.splice(commentIndex, 1 )

        return deletedcomment[0]
    },
    createComment: (parent, args, {db}, info) => {
        const emailTaken = db.users.some((user) => user.id === args.data.authorId)
        const userExists = db.posts.some((post) => post.id === args.data.postId)

        if(!emailTaken && !userExists) {
            throw new Error("Some Thing in wrong")
        }

        const comment = {
            id: uuidv4(),
            text: args.data.text,
            postId: args.data.postId,
            authorId: args.data.authorId
        }

        db.comments.push(comment)
        return comment
    },
    updateComment: (parent, { id, data}, { db }, info) => {
        const comment = db.comments.find((comment)=> comment.id === id)
        if(!comment){ throw new Error("comment dont exists")}

        if(typeof data.text === 'string'){
            console.log("hello")
            comment.text === data.text
        }
        console.log("nice")
        return comment
    }
}

module.exports = Mutation