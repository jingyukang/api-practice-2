const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

// const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://jinjin:jinjin@jinjin.pegil.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const db = mongoose.connection;

db.on("error", console.error);

mongoose.connect(
  uri,
  {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Conndected to mongodb server");
  }
);

const Post = require("./models/posts");

const app = express();
const port = 8080;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (res.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// GET ALL POSTS
app.get("/api/posts", (req, res) => {
  Post.find((err, post) => {
    if (err) return res.status(500).send({ error: "database failure" });
    res.json(post);
  });
  // res.send("GET: /posts!");
});

// GET SINGLE POSTS
app.get("/api/posts/:post_id", (req, res) => {
  Post.findOne({ _id: req.params.post_id }, (err, post) => {
    if (err) return res.status(500).json({ error: err });
    if (!post) return res.status(404).json({ error: "post not found" });
    res.json(post);
  });
  // res.send("GET: /posts/:post_id!");
});

// CREATE POSTS
app.post("/api/posts", (req, res) => {
  const post = new Post();
  post._id = mongoose.Types.ObjectId();
  post.title = req.body.title;
  post.content = req.body.content;
  post.published_date = new Date();

  post.save((err) => {
    if (err) {
      console.log(err);
      res.json({ result: 0 });
      return;
    }
    res.json(post);
  });
});

// UPDATE THE POSTS
app.put("/api/posts/:post_id", (req, res) => {
  Post.findById(req.params.post_id, (err, post) => {
    if (err) return res.status(500).json({ error: "database failure" });
    if (!post) return res.status(404).json({ error: "post not found" });

    if (req.body.title) post.title = req.body.title;
    if (req.body.content) post.content = req.body.content;

    post.save((err) => {
      if (err) res.status(500).json({ error: "failed to update" });
      res.json({ message: "post updated" });
    });
  });
  // res.end();
});

// DELETE POSTS
app.delete("/api/posts/:post_id", (req, res) => {
  Post.remove({ _id: req.params.post_id }, (err, output) => {
    if (err) return res.status(500).json({ error: "database failure" });
    res.status(204).end();
  });
  // res.end();
});

app.listen(port, () => {
  console.log("Express server has started on port" + port);
});
