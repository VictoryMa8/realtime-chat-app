const express = require("express"); // import express which runs our http server
const cors = require("cors"); // call the server from any other origin
const axious = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axious.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "PRIVATE-KEY": "ec30c427-0fd3-41cf-b6c4-b5840ffd771c " } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001); // run the app on port 3001