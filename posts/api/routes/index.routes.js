const express = require('express');
const { createPost, getPosts } = require('../../controllers/index.controller');
const router = express.Router()

router.route("/posts").post(createPost).get(getPosts)

module.exports = router
