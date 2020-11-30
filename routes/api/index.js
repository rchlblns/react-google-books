const router = require("express").Router();
const path = require("path");
const bookRoutes = require("./books");

// Route to /api/books
router.use("/books", bookRoutes);

// router.use("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// })

module.exports = router;
