const { randomBytes } = require("crypto");
const axios = require("axios");

const posts = {};
exports.createPost = async(req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };
  await axios.post("http://localhost:5001/events", {
    type: "postCreated",
    data: {
        id,
        title,
    },
  })
  res.status(201).send(posts[id]);
};
exports.getPosts = async (req, res) => {
  res.send(posts);
};
exports.events = (req, res) => {
    console.log('received event: ', req.body.type);
    res.send({status: "success"});
}