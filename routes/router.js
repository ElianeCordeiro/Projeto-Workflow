const router = require("express").Router()
const movieController = require("../controller/movieController");



router.get('/movies', movieController.readAll);

module.exports = router;
