//  create a post route for the query service
const express = require("express");
const { createEvents, getPosts } = require("../../controller/query.controller");
const router = express.Router();

router.route("/events").post(createEvents)
router.route("/posts").get(getPosts)

module.exports = router