const express = require("express");
const cors = require("cors");

const app = express();
const eventsRouter = require("./api/routes/events.routes");

app.use(express.json());
app.use(cors());

app.use("/events", eventsRouter);

const port = 5001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
