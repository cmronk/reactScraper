const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// match with "/api/articles"
router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.create);

// matches by id
router.route("/:id")
    .get(articlesController.findById)
    .put(articlesController.update)
    .delete(articlesController.remove);

module.exports = router;



