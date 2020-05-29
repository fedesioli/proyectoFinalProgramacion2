var express = require('express');
var router = express.Router();
var controlador = require("../controllers/home")
var controladorUsuarios = require("../controllers/usuariosController")

router.get("/", controlador.home);
router.get("/BuscadorAvanzado", controlador.buscadorAvanzado);
router.get("/seriesFavoritas", controlador.favoritos);
router.get("/detalle", controlador.detalleSerie);
router.post("/detalle", controlador.nuevaReview);
router.get("/SeriesPorGenero", controlador.porGenero);
router.get("/resultadosBuscadorAvanzado", controlador.resultadosBuscadorAvanzado)
router.get("/ResultadoDeBuscador", controlador.buscador);
router.get("/registrarse", controlador.registrarse);
router.post("/registrarse", controlador.crearUsuario);

// Controlador de usuarios

router.get("/BuscadorDeUsuarios", controladorUsuarios.buscarUsuario);
router.get("/ResultadoDeUsuarios", controladorUsuarios.ResultadosBuscadorUsuarios);
router.get("/DetalleUsuario", controladorUsuarios.DetalleUsuario);
router.get("/login", controladorUsuarios.formularioLogin);
router.post("/login", controladorUsuarios.login);
router.get("/logOut", controladorUsuarios.logOut)
router.get("/myReviews", controladorUsuarios.myReviews);
router.get("/editReview", controladorUsuarios.editReviewsForm);
router.post("/editReview", controladorUsuarios.editReviews);
router.get("/deleteReview", controladorUsuarios.deleteReview);
module.exports = router;
