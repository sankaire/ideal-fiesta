const express = require('express');
const cors = require("cors")

/**
 * pull in api
 */
const postRouter = require("./api/routes/index.routes")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", postRouter)

let server = app.listen(4000, ()=>console.log(`post service running on 4000`))
server.timeout = 1000