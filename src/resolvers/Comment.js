const Comment = {
    postId: (parentValue, args, {db}) =>{
        return db.posts.find((post)=>{
            return post.id == parentValue.postId
        })
    },
    authorId: (parent,args, {db}) => {
        return db.users.find((user) => {
            return user.id == parent.authorId
        })
    }
}    

module.exports = Comment