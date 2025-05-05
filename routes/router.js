const router = require("express").Router()
const movieController = require("../controller/movieController");

router.get('/movies', movieController.readAll);
router.post('/movies', movieController.create)

module.exports = router;
