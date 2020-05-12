var express = require('express');
var router = express.Router();
var controlador = require("../controllers/home")

router.get("/", controlador.home);
router.get("/buscadorAvanzado", controlador.home);
router.get("/favoritos", controlador.home);
router.get("/detalle/:id", controlador.home)

module.exports = router;
