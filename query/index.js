// create an express server
const express = require("express");
const app = express();
const cors = require("cors");


const queryRouter = require("./api/routes/query.routes");

app.use(express.json());
app.use(cors())

app.use("", queryRouter);
const port = 4001 ;
app.listen(port, () => console.log(`Query service listening on port ${port}!`));
