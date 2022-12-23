let serverStatus = false;

let login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (serverStatus) {
        resolve({ username: username });
      } else {
        reject("server doesnt work");
      }
    }, 1000);
  });
};

let getPosts = (posts) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ posts: posts });
    }, 2000);
  });
};

let newPost = (newone) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ newone: newone });
    }, 3000);
  });
};

async function displayUser() {
  try {
    const user = await login("sadikturan", "12345");
    console.log(user);
    const posts = await getPosts(user.username);
    console.log(posts);
    const details = await newPost("new post");

    console.log(details);
  } catch (err) {
    console.log(err);
  }
}

displayUser();
