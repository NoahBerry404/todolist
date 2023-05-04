const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  console.log("Middleware");
  next();
})

app.use('/api/posts',(req,res,next)=>{
  const posts = [
    {
      id: "1234",
      title: "server post 1",
      body: "server test post"
    },
    {
      id: "5678",
      title: "server post 2",
      body: "server test post 2"
    },
    {
      id: "8910",
      title: "server post 3",
      body: "server test post 3"
    }
  ]

  res.status(200).json({
    message: "This is the server posts",
    posts: posts
  });
});

module.exports = app;
