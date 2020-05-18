var express = require('express');
var router = express.Router();
var controlador = require("../controllers/home")

router.get("/", controlador.home);
router.get("/BuscadorAvanzado", controlador.buscadorAvanzado);
router.get("/seriesFavoritas", controlador.favoritos);
router.get("/detalle", controlador.detalleSerie);
router.get("/SeriesPorGenero", controlador.porGenero);
router.get("/resultadosBuscadorAvanzado", controlador.resultadosBuscadorAvanzado)
router.get("/ResultadoDeBuscador", controlador.buscador);
router.get("/registrarse", controlador.registrarse);
router.post("/registrarse", controlador.crearUsuario);

module.exports = router;
