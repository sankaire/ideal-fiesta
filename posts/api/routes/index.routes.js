const express = require('express');
const { createPost, getPosts, events } = require('../../controllers/index.controller');
const router = express.Router()

router.route("/posts").post(createPost).get(getPosts)
router.route("/events").post(events)

module.exports = router
