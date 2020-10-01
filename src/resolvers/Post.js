const Post = {
    author: (parentValue, args, { db }) => {
        return db.users.find((user) => {
            return user.id == parentValue.author
        })
    },
    comments: (parent, args, { db }) => {
        return db.comments.filter((comment)=> {
            return comment.postId == parent.id     
        })
    }
}

module.exports = Post