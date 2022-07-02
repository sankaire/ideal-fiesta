const express = require("express");
const { postEvents } = require("../../controllers/events.controller");
const router = express.Router()

router.route("/").post(postEvents)

module.exports = router;