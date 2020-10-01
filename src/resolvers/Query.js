const Query = {
    users: (parentValue, args, {db}, info) => {
        return db.users    
    },
    posts: (parentValue, args, {db}, info) => {
        return db.posts
    },
    comments: (parent, args, {db}) => {
        return db.comments
    }
}

module.exports = Query