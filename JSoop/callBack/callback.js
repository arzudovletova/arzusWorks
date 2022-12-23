console.log("start")

const login = (username, password,callback) =>{
    setTimeout(()=>{
        callback({username: username, email: "@info@gmail.com"})
    },1000)
}

const getPostsByUsername = (username, callback)=>{
    setTimeout(()=>{
        callback(["post 1", "post 2", "post 3"])
    },2000)
}

const getPostDetails = (post, callback)=>{
    setTimeout(()=>{
        callback("post title")
    },1000)
}

login("arzu", "12345", user=>{
    console.log(user)

    getPostsByUsername(user.username, posts =>{
        console.log(posts[0]);

        getPostDetails(posts[0], detail =>{
            console.log(detail)
        })
    })
})

console.log("end")