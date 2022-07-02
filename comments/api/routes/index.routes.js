const express = require('express');
const { createComment, getComments, events } = require('../../controllers/index.controller');
const router = express.Router()

router.route("/posts/:id/comment").post(createComment).get(getComments)
router.route("/events").post(events)

module.exports = router
