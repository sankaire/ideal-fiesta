const {randomBytes} = require("crypto")

const posts = {}
exports.createPost = (req, res)=>{
 const id = randomBytes(4).toString('hex')
 const {title} = req.body
 
 posts[id] ={
    id, title
 }
 res.status(201).send(posts[id])
}
exports.getPosts = async(req, res)=>{
    res.send(posts);
}