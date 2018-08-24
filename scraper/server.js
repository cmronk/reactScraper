// dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// routes here
const routes = require("./routes");
app.use(routes);

// db connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

// Sends other requests to React App
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Scraper running on port ${PORT}!`);
});