const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  post.id = '12345';
  res.status(201).json({
    count: 1,
    message: 'Successful POST',
    posts: [post]
  })
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "utgf5",
      title: "title 1",
      content: "server content 1"
    },
    {
      id: "n6jgh8",
      title: "title 2",
      content: "server content 2"
    },
    {
      id: "08ynh798",
      title: "title 3",
      content: "server content 3"
    }
  ];

  res.status(200).json({
    count: posts.length,
    message: 'Successful GET',
    posts: posts
  });
});


module.exports = app;
