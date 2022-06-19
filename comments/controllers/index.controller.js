const {randomBytes} = require("crypto")
const commentsByPostId = {}

const posts = {}
exports.createComment = (req, res)=>{
    const id = randomBytes(4).toString('hex')
    const {content} = req.body
    const comments = commentsByPostId[req.params.id] || []
    comments.push({id:id, content})
    commentsByPostId[req.params.id] = comments

    res.status(201).send(comments);
}
exports.getComments = async(req, res)=>{
    res.send(commentsByPostId[req.params.id] || []);
}