let db = require("../database/models/index");
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
    var id_serie = req.query.id
    db.reviews.findAll({
      where:{
          id_serie: id_serie,
      }
    })
    .then(function(reviews){
      var id_serie = req.query.id
    res.render("DetalleDeSerie", {reviews: reviews, id_serie: id_serie})
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
    .then(resultado=> {
      console.log(resultado)

      if(resultado != null){
       
        let review = {
          id_serie: req.body.id_serie,
          id_user: resultado.id_user,
          puntaje: req.body.puntaje,
          texto: req.body.texto,
        }
        console.log(review)   
        db.reviews.create(review)
        .then(function(){
        return res.redirect("/home")
        })               
      } else{
        return res.send("error")
      }
      })
      
  }
}


module.exports = controlador;