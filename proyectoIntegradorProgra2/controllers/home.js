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
    res.render("DetalleDeSerie")
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
  }
}

let moduloLogin = {
  chequearUsuario: function (email) {
      return db.usuario.findOne({
          where: {
              email: req.body.email
          }
      })
      .then(function(usuario) {
          return usuario != null;
      })
  },

  buscarPorEmail: function (email){
      return db.usuario.findOne({
          where: {
              email: req.body.email
          }
      })
      .then(resultado=> {
          return resultado
      })
  },

  validar: function (email, pass) {
      return db.usuario.findOne({
          where:{
              email: req.body.email,
              password: req.body.password
          },
      })
      .then(results=>{
          return results;
      })
  }
}


module.exports = moduloLogin;
module.exports = controlador;