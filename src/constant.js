const comments = [
    {
        id: "111",
        text: "Hello money lov",
        postId: 11,
        authorId: 1
    },
    {
        id: 222,
        text: "Hello black laeg",
        postId: 22,
        authorId: 2
    },
    {
        id: 333,
        text: "Hello mGo anr",
        postId: 33,
        authorId: 3
    },
    {
        id: 444,
        text: "Hello mashalala",
        postId: 11,
        authorId: 1
    }
]

const posts = [
    {
        id: "11",
        title: "money love",
        body: "What is this",
        published: true,
        author: 1
    },
    {
        id: 22,
        title: "White life",
        body: "What aa life is",
        published: true,
        author: 1
    },
    {
        id: 33,
        title: "Black ground",
        body: "Black world to the ground",
        published: false,
        author: 1
    }
]

const users = [
    {
        id: "1",
        name: "Andrew",
        email: "and@and.com",
        age: 45
    },
    {
        id: 2,
        name: "Finn",
        email: "fin@fin.com",
        age: 23
    },
    {
        id: 3,
        name: "Lill",
        email: "Liil@and.com",
        age: 34
    }
]

const db = {
    users,
    posts,
    comments
}

module.exports = db