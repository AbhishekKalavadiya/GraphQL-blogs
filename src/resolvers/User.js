const User =  {
    posts: (parentValue, args, {db}) => {
        return db.posts.filter((post) => {
            return post.author === parentValue.id
        })
    },
    comments: (parent, args, {db}) => {
        return db.comments.filter((comment)=>{
            return comment.authorId == parent.id
        })
    }
}

module.exports = User