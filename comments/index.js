const express = require('express');
const cors = require("cors")

/**
 * pull in api
 */
const commentsRouter = require("./api/routes/index.routes")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", commentsRouter)

const port = 5000

app.listen(5000, ()=>console.log(`post service running on ${port}`))