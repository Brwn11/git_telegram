const express = require("express");
const app = express();
// const mongoose = require("mongoose");
app.use(express.json());
app.post("/testing/", async (req, res) => {
    console.log("brown")
    res.send("brown")
});


// mongoose
//   .connect("mongodb://localhost/assignment")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Could not connect to MongoDB", err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
