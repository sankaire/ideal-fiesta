const express = require('express');
const { createComment, getComments } = require('../../controllers/index.controller');
const router = express.Router()

router.route("/posts/:id/comment").post(createComment).get(getComments)

module.exports = router
