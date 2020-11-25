const express = require("express");
const path = require("path");

const app = express();

// test route to make sure that we can reach the backend
// will move to routes file after
app.get("/test", (req, res) => {
    res.send("Welcome to the backend of this app!");
});

// port info
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`🌎  ==> Api is now listening on port ${port}.`);
});
