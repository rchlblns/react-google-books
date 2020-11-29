const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
// const db = require("../models");
const routes = require("../routes");


const app = express();

app.use(cors());

// Connect to Mongo DB database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log(`Database state: ${mongoose.connection.readyState}`);
})

// Serve static files from React frontend
app.use(express.static(path.join(__dirname, "../client/build")));

app.use(routes);

// Wildcard route - Send back index.html for any route that doesn't match
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..client/build/index.html"));
})

// port info
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`🌎  ==> Api is now listening on port ${port}.`);
});
