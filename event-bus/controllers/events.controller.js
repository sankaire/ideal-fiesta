const axios = require("axios");
exports.postEvents = (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:5000/events", event);
  axios.post("http://localhost:4001/events", event);

  res.send({ status: "success" });
};
