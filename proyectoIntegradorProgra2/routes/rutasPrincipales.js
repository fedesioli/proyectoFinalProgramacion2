var express = require('express');
var router = express.Router();
var controlador = require("../controllers/home")

router.get("/", controlador.home);
router.get("/generos", controlador.home);
router.get("/favoritos", controlador.home);
router.get("/", controlador.home)

module.exports = router;
