const { randomBytes } = require("crypto");
const axios = require("axios");
const commentsByPostId = {};

const posts = {};
exports.createComment = async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: id, content });
  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:5001/events", {
    type: "commentCreated",
    data: {
      id:id,
      content,
      postId: req.params.id,
    },
  });
  res.status(201).send(comments);
};
exports.getComments = async (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
};
exports.events = (req, res) => {
    console.log('received event: ', req.body.type);
    res.send({status: "success"});
}