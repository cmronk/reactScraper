// api routes

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes );

// api routes above, if none, go to React
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router