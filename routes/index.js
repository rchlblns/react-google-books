// const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Route to /api
router.use("/api", apiRoutes);

module.exports = router;