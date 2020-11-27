const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
// test route to make sure that we can reach the backend
// will move to routes file after
// app.get("/test", (req, res) => {
//     res.send("Welcome to the backend of this app!");
// });

// Serve static files from React frontend
app.use(express.static(path.join(__dirname, "../client/build")));

// Send back index.html for any route that doesn't match routing
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..client/build/index.html"));
})

// port info
const port = process.env.PORT || 3001;

// Connect to Mongo DB database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connected to Google Books database");
})

app.listen(port, () => {
    console.log(`🌎  ==> Api is now listening on port ${port}.`);
});
