const axios = require("axios");
const router = require("express").Router();

router.get("/articles", (req, res) => {
    axios  
        .get("https://www.nytimes.com/", {params: req.query})
        .then(({ data: { results }}) => res.json(results))
        .catch(err => res.status(422).json(err)); 
});

module.exports = router;



// TODO
// start with getting the form info
// figure out scraping with react
// configure database to use with scraping
// this isnt correct