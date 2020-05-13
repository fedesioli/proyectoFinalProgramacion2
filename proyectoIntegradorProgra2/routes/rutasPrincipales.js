var express = require('express');
var router = express.Router();
var controlador = require("../controllers/home")

router.get("/", controlador.home);
router.get("/BuscadorAvanzado", controlador.buscadorAvanzado);
router.get("/seriesFavoritas", controlador.favoritos);
router.get("/detalle/:id", controlador.detalleSerie)
router.get("/seriesPorGenero", controlador.porGenero);

module.exports = router;
