const getRemoteData = function (url, callback) {
  // HANDLE THE HTTP REQUEST WITH url
  //...
  //...
  //...
  //...
  //...
  //...
  //...
  //...
  //...
  //...
  //0.5 seconds

  // const data = result of the HTTP Req

  if (err) {
    callback(err);
  } else {
    callback(null, data);
  }
};

getRemoteData("https://whatever.com/users/123991823", function (undefined, user) {
  getRemoteData("https://whatever.com/posts/" + user.name, function (undefined, blogPosts) {
    getRemoteData("https://whatever.com/comments/" + blogPosts[0].id, function (undefined, comments) {
      // DOM MANIPULATION
      // Attaching comments in the page...
      console.log(comments);
    });
  });
});

getRemoteData("https://whatever.com/users/123991823")
  .then(function (user) {
    return getRemoteData("https://whatever.com/posts/" + user.name);
  })
  .then(function (blogPosts) {
    return getRemoteData("https://whatever.com/comments" + blogPosts[0].id);
  })
  .then(function (comments) {
    // DOM MANIPULATION
    // Attaching comments in the page...
    console.log(comments);
  })
  .catch(function (error) {
    alert(error);
  });

// ARROW FUNCTIONS

function sayHi(user) {
  console.log("Hi " + user.name);
}

const sayHi = function (user) {
  return "Hi " + user.name;
};

const sayHi = user => {
  return "Hi " + user.name;
};

const sayHi = user => "Hi " + user.name;

// SIMPLIFIED PROMISE APPROACH
getRemoteData("https://whatever.com/users/123991823")
  .then(user => getRemoteData("https://whatever.com/posts/" + user.name))
  .then(blogPosts => getRemoteData("https://whatever.com/comments" + blogPosts[0].id))
  .then(comments => {
    // DOM MANIPULATION
    // Attaching comments in the page...
    console.log(comments);

    for (let i = 0; i < comments.length; i++) {
      const element = comments[i];
    }
  })
  .catch(error => alert(error));
