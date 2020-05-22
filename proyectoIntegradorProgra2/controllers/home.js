let db = require("../database/models/index");
let op = db.Sequelize.Op;
let bcrypt = require("../node_modules/bcrypt/bcrypt")

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
      console.log(reviews);
      
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
    let passEncricptada = bcrypt.hashSync(req.body.password, 10);

    let usuario = {
      username: req.body.username,
      email: req.body.email,
      password: passEncricptada,
      birth_date: req.body.birth_date,      
    }
    db.users.create(usuario)
      res.redirect("/home")
  },
  nuevaReview: function(req,res){
    let idSerie = req.params.id
    let review = {
      id_serie: idSerie,
      puntaje: req.body.puntaje,
      texto: req.body.texto,
    }
    db.reviews.create(review)
    res.redirect("/home")
  }
}


module.exports = controlador;