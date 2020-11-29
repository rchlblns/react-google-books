const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
// const db = require("../models");
const routes = require("../routes");
const port = process.env.PORT || 3001;


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Routing
app.use(routes);

// Wildcard route - Send back index.html for any route that doesn't match
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

// Port info
app.listen(port, () => {
    console.log(`🌎  ==> Api is now listening on port ${port}.`);
});
