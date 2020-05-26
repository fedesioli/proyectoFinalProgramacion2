let db = require("../database/models");
let op = db.Sequelize.Op;
let moduloLogin = require("../modulos/login");


var controlador = {

  home: function(req,res){
    res.render("home")
  },
  buscadorAvanzado: function(req,res){
    res.render("BuscadorAvanzado")
  },
  favoritos: function(req,res){
    res.render("seriesFavoritas")
  },
  detalleSerie: function(req,res){
    db.reviews.findAll()
    .then(function(reviews){
    res.render("DetalleDeSerie", {reviews: reviews})
    })
  },
  porGenero: function(req,res){
    res.render("SeriesPorGenero")
  },
  resultadosBuscadorAvanzado: function(req,res){
    res.render("ResultadosBuscadorAvanzado")
  },
  buscador: function(req,res){
    res.render("ResultadoDeBuscador")
  },
  registrarse: function(req,res) {
    res.render("registrarse")
  },
  crearUsuario: function(req,res){
      let usuario = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      birth_date: req.body.birth_date,      
    }
    db.users.create(usuario)
      res.redirect("/home")
  },
  nuevaReview: function(req,res){
    moduloLogin.validar(req.body.email, req.body.password)
    .then(results=> {
        let review = {
          id_serie: req.params.id,
          id_user: results.id_user,
          puntaje: req.body.puntaje,
          texto: req.body.texto,
        }
        db.reviews.create(review)               
      })
      .then(function(index){
        return res.redirect("/home/detalle?id=" + req.params.id)
      })
      .catch(function(error){
        return error
      })
  }
}


module.exports = controlador;