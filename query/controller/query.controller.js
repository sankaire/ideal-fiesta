const posts = {};

exports.createEvents = async (req, res) => {
  const { type, data } = req.body;
  if (type === "postCreated") {
    const { id, title } = data;
    posts[id] = {
      id,
      title,
      comments: [],
    };
  }
  if (type === "commentCreated") {
    const { id, content, postId } = data;
    const post = posts[postId];
    post.comments.push({
      id,
      content,
    });
  }
  console.log(posts);
};

exports.getPosts = async (req, res) => {
  res.send(posts);
};
